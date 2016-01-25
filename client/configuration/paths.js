const path = require('path');

const rootDir = path.join(__dirname, '../');
const srcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');
const appDir = path.join(srcDir, 'app');
const entryFile = path.join(appDir, 'index.jsx');
const index = path.join(srcDir, 'index.html');

const paths = {
    rootDir,
    entryFile,
    distDir,
    appDir,
    index
}

module.exports = paths;