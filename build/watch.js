var chokidar = require('chokidar');

let childCmdProcess

const build = () => {
    if(childCmdProcess){
        childCmdProcess.kill()
    }
    
    const cmd = 'npm run build-tsc && docker exec sls bash -c "sls offline start"';
    console.log('cmd - ', cmd)
    childCmdProcess = spawn(cmd);
    childCmdProcess.on('message', (m, socket) => {
        console.log('sls -> ', m)
    })
}


var watcherSrcHandlers = chokidar.watch(
    'src', 
    {
        ignored: /^\./, 
        persistent: true
    }
);

console.log('offline - Initializing watch over src/**')
watcherSrcHandlers
// .on('add', build)
.on('change', build)
// .on('unlink', build)
.on('error', function(error) {
    console.error('Error happened', error);
})

