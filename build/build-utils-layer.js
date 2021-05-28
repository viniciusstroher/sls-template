const fs = require('fs');
const fsExtra = require('fs-extra');
let exec = require('child_process').exec,
    child;
const process = require('process');
console.log('creating dirs.')
fs.mkdir('utils-layer', function(dataMkdir1) {
	fs.mkdir('utils-layer/nodejs', function(dataMkdir2) {
		const srcDir = `dist/utils`;
		const destDir = `utils-layer/nodejs`;
									
		// To copy a folder or file  
		fsExtra.copySync(srcDir, destDir, { overwrite: true }, function (err) {
			if (err) {                 
				console.error(err);
			} else {
				console.log("copied into layer utils dir!");
			}
		});
	});
});

