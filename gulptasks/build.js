import {execSync} from 'child_process';
import path from 'path';
import findup from 'findup-sync';
import through2 from 'through2';
import gulp from 'gulp';
import gulputil from 'gulp-util';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import babel from 'gulp-babel';
import {MODULE_PREFIX, ENTRY_MODULE, SRC_DIR, MODULES_BUILD_DIR, DEPLOY_DIR} from './build-constants.js';

function isJsFile(file) {
	const extname = path.extname(file.path);
	return extname === '.js' || extname === '.jsx';
}

function isPackageJsonFile(file) {
	const filename = path.basename(file.path);
	return filename === 'package.json';
}

function updateModulesPackages() {
	return through2.obj(function(file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gulputil.PluginError('convertPackageMain', 'Streaming not supported'));
			return;
		}

		const pkg = JSON.parse(file.contents.toString());

		// Update package.main to point at babel-renamed files
		if (pkg.main && path.extname(pkg.main) === '.jsx') {
			pkg.main = pkg.main.substr(0, pkg.main.length - 1);
		}

		// Update dependencies to load shrine modules locally
		pkg.dependencies = Object.keys(pkg.dependencies || {}).reduce(
			(dependencies, dependencyName) => {
				if (dependencyName.indexOf(`${MODULE_PREFIX}/`) === 0) {
					dependencies[dependencyName] = path.resolve(path.join(MODULES_BUILD_DIR, dependencyName));
				} else {
					dependencies[dependencyName] = pkg.dependencies[dependencyName];
				}

				return dependencies;
			},
			{}
		);

		file.contents = new Buffer(JSON.stringify(pkg, null, 2));
		this.push(file);

		cb();
	});
}

gulp.task('transpile-src', [], () =>
	gulp.src(path.join(SRC_DIR, '**', '*'), {nodir: true})
		.pipe(rename((filepath) => {
			const pkgLocation = findup('package.json', {cwd: path.join(SRC_DIR, filepath.dirname), nonull: true});
			const {name: moduleName} = require(pkgLocation);
			filepath.dirname = moduleName;
		}))
		.pipe(gulpif(isJsFile, babel()))
		.pipe(gulpif(isPackageJsonFile, updateModulesPackages()))
		.pipe(gulp.dest(MODULES_BUILD_DIR))
);

gulp.task('copy-entry-module', ['transpile-src'], () =>
	gulp.src(path.join(MODULES_BUILD_DIR, ENTRY_MODULE, '**', '*'))
		.pipe(gulp.dest(DEPLOY_DIR))
);

gulp.task('build', ['copy-entry-module'], () => {
	execSync('npm install', {cwd: DEPLOY_DIR});
});