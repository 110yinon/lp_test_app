const { execSync } = require('child_process');

function uninstallValidateSync() {
    // console.log('uninstallValidate kick');

    // automated Uninstallation
    try {
        const std = execSync('.\\batches\\uninstall-timeout-nodejs.bat');
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

module.exports = uninstallValidateSync;