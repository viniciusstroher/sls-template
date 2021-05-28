const fs = require('fs');
let exec = require('child_process').exec,
    child;
const process = require('process');
console.log('creating dirs.')
fs.mkdir('dependencies-layer', function(dataMkdir1) {
	fs.mkdir('dependencies-layer/nodejs', function(dataMkdir2) {
		//cd dependencies-layer/nodejs
		process.chdir('dependencies-layer/nodejs');
		fs.unlink('package.json', function(dataRemoveP) {
			fs.unlink('package-lock.json', function(dataRemovePL) {

				console.log('config files deleted.')
				process.chdir('../..');
				fs.copyFile('package.json', 'dependencies-layer/nodejs/package.json', function(dataPackages) {
					fs.copyFile('package-lock.json', 'dependencies-layer/nodejs/package-lock.json', function(dataPackagesLock) {
						console.log('copied config files.')
						//deleta node_modules
						process.chdir('dependencies-layer/nodejs');
						child = exec('rimraf node_modules', function (error, stdout, stderr) {
							console.log('node_modules deleted.')
							
							//instala node_modules
							child = exec('npm i --production', function (error, stdout, stderr) {
								//deleta packge.json
								console.log('installed dependencies and delete packge.json.')
								fs.unlink('package.json', function(dataRemove) {});
								process.chdir('../..');
							});
						})
						
						
					});
				});
				
			});
		});
	});
});

