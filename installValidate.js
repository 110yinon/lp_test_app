const fsPromise = require('node:fs/promises');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);


async function installValidate(exePath) {

    //path to install the IQDVT
    const appPath = 'C:\\IQDVT_TEST\\';

    // automated installation
    try {
        const std = await execFile(exePath, ['/S', `/D=${appPath}`]);
        // console.log(std.stout);
        // console.log(std.stderr);
    }
    catch (err) {
        console.log('err:', err);
    }

    // checks for files exist in directory
    const filesToCheck = ['IQTest.dll', 'IQTestAPI.dll', 'IQDVT.exe', 'IQDVT-CLI.exe'];
    let isFilesIncludes = false;

    const files = await fsPromise.readdir(`${appPath}/Bin`);
    
    isFilesIncludes = filesToCheck.every(file => {
        return files.includes(file);
    });
    // console.log('isFilesIncludes', isFilesIncludes);

    return isFilesIncludes;
}

module.exports = installValidate;