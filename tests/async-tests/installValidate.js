const fsPromise = require('node:fs/promises');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);


async function installValidate(exePath, isBinFolder) {
    // console.log('installValidate kick');

    //path to the installed IQDVT folder
    const appPath = 'C:\\IQDVT_TEST\\';

    // automated installation
    try {
        const std = await execFile(exePath, ['/S', `/D=${appPath}`]);
        // console.log(std.stout);
        // console.log(std.stderr);

        // checks for files exist in directory
        const filesToCheck = ['IQTest.dll', 'IQTestAPI.dll', 'IQDVT.exe', 'IQDVT-CLI.exe', 'exports.txt'];
        let isFilesIncludes = false;

        const files = await fsPromise.readdir(`${appPath}${isBinFolder ? '/Bin' : ''}`);

        isFilesIncludes = filesToCheck.every(file => {
            if (!files.includes(file)) {
                console.log(`>> the '${file}' file is not include`)
                return false;
            }
            return true;
        });
        // console.log('isFilesIncludes', isFilesIncludes);

        return isFilesIncludes;
    }
    catch (err) {
        console.log('installValidate - error:', err);
        return false;
    }
}

module.exports = installValidate;