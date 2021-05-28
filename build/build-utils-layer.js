const fs = require('fs');
const fsExtra = require('fsExtra');
let exec = require('child_process').exec,
    child;
const process = require('process');
console.log('creating dirs.')
fs.mkdir('utils-layer', function(dataMkdir1) {
	fs.mkdir('utils-layer/nodejs', function(dataMkdir2) {
		//cd dependencies-layer/nodejs
		process.chdir('utils-layer/nodejs');

		const srcDir = `dist/utils`;
		const destDir = `utils-layer/nodejs`;
									
		// To copy a folder or file  
		fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
			if (err) {                 
				console.error(err);
			} else {
				console.log("copied into layer utils dir!");
			}
		});
	});
});

