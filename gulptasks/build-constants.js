import path from 'path';

export const MODULE_PREFIX = '@shrine';
export const ENTRY_MODULE = '@shrine/app';

export const SRC_DIR = 'src';
export const BUILD_DIR = 'build';

export const MODULES_BUILD_DIR = path.join(BUILD_DIR, 'modules');
export const DEPLOY_DIR = path.join(BUILD_DIR, 'deploy');

export const SERVER_DIR = path.join('server');
export const PUBLIC_DIR = path.join(SERVER_DIR, 'public');