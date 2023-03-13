const { execSync } = require('child_process');

function uninstallValidateSync() {
    // console.log('uninstallValidate kick');

    // automated Uninstallation
    try {
        const stdout = execSync('.\\batches\\uninstall-timeout-nodejs.bat', { encoding: 'utf8' });
        // console.log('stdout:');
        // console.log(stdout);
        return stdout.includes('pass');
    }
    catch (err) {
        console.log(`uninstallValidate - error`);
        console.log('err', err);
        return false;
    }

}

module.exports = uninstallValidateSync;