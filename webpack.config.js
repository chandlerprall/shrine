const path = require('path');

module.exports = {
	context: path.join(__dirname, 'build', 'deploy'),
	output: {
		library: 'BundledApp',
		libraryTarget: 'umd'
	}
};