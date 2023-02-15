const fs = require('fs');
const { execFile } = require('child_process');
const path = require('path');


function uninstallValidate() {
    //path to the IQDVT app
    const appPath = 'C:\\IQDVT_TEST\\';
    const uninstallExe = `${appPath}uninst.exe`;

    // automated Uninstallation
    const cp = execFile(uninstallExe, ['/S'], (err, stdout, stderr) => {
        if (err) {
            console.log(`uninstallValidate - error, cannot run ${uninstallExe}`);
            // console.log(err);
            return;
        }
        // console.log('std.stout', std.stout);
        // console.log('std.stderr', std.stderr);     
    })

    // get the folder of the IQDVT app
    const [, appDir] = appPath.split('\\');
    // console.log(appDir);

    // get the root drive, mostly 'C:/'
    const rootDrive = path.resolve(appPath, '..');
    // console.log(rootDrive);

    setTimeout(() => {
        // checking for app folder deleted
        fs.readdir(rootDrive, (err, files) => {
            // console.log(files)
            const isUninstalled = !files.includes(appDir);
            console.log('~~ is uninstalled:', isUninstalled);
        });
    }, 1000);

}

module.exports = uninstallValidate;