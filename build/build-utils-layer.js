const fs = require('fs');
const fsExtra = require('fs-extra');
let exec = require('child_process').exec,
    child;
const process = require('process');
console.log('deleting utils-layer.');
child = exec('rimraf utils-layer', function (error, stdout, stderr) {
	console.log('creating dirs.');
	fs.mkdir('utils-layer', function(dataMkdir1) {
		fs.mkdir('utils-layer/nodejs', async (dataMkdir2) => {
			const srcDir = `dist/utils`;
			const destDir = `utils-layer/nodejs`;
			console.log('copying into dir utils-layers.');							
			// To copy a folder or file  
			await fsExtra.copySync(srcDir, destDir, { overwrite: true });
			console.log("copied into layer utils dir!");
			const packageInfo = {name:"utils", version:"1.0.0", main:"index.js"}
			fs.writeFileSync(`${destDir}/package.json`,JSON.stringify(packageInfo),{encoding:'utf8',flag:'w'})
				
		});
	});
});
