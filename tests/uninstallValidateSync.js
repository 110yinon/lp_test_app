const { execSync } = require('child_process');

function uninstallValidateSync() {
    // console.log('uninstallValidate kick');

    // automated Uninstallation
    try {
        // stdio:'inherit' for the stdin would cancel the redirect error:
        // ERROR: Input redirection is not supported, exiting the process immediately.
        const stdout = execSync('.\\batches\\uninstall-timeout-nodejs.bat', { encoding: 'utf8' ,stdio:['inherit','pipe','pipe']});
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