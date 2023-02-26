const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function uninstallValidate() {
    console.log('uninstallValidate kick');
    
    // automated Uninstallation
    try {
        const std = await exec('.\\batches\\uninstall-timeout-nodejs.bat');
        // console.log('stdout', std.stdout);
        // console.log('stderr', std.stderr);
        return std.stdout.includes('true');
    }
    catch (err) {
        // console.log(`uninstallValidate - error`);
        // console.log('err', err);
        return false;
    }

}

module.exports = uninstallValidate;