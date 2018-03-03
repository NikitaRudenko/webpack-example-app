const {resolve} = require('path');

const publicDir = resolve(__dirname, './public');
const distDir = resolve(__dirname, './public/dist');
const srcDir = resolve(__dirname, './src');

module.exports = {
	publicDir,
	distDir,
	srcDir
};
