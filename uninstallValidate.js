const fsPromise = require('node:fs/promises');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);
const path = require('path');


async function uninstallValidate() {
    //path to the IQDVT app
    const appPath = 'C:\\IQDVT_TEST\\';
    const uninstallExe = `${appPath}uninst.exe`;

    // automated Uninstallation
    try {
        const std = await execFile(uninstallExe, ['/S']);
        // console.log('std.stout', std.stout);
        // console.log('std.stderr', std.stderr);
    }
    catch (err) {
        console.log(`uninstallValidate - error, cannot run ${uninstallExe}`);
        // console.log(err);
    }

    // get the folder of the IQDVT app
    const [, appDir] = appPath.split('\\');
    // console.log(appDir);

    // get the root drive, mostly 'C:/'
    const rootDrive = path.resolve(appPath, '..');
    // console.log(rootDrive);

    // checking for app folder deleted
    const files = await fsPromise.readdir(rootDrive);
    // console.log(files)

    const isUninstalled = !files.includes(appDir);
    // console.log('is folder deleted:', isUninstalled);
    return isUninstalled;
}

module.exports = uninstallValidate;