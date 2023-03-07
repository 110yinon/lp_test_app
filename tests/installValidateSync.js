const fs = require('fs');
const { execFileSync } = require('child_process');


function installValidate(exePath, isBinFolder) {
    // console.log('installValidate kick');

    //path for IQDVT installation folder
    const appPath = 'C:\\IQDVT_TEST\\';

    // automated installation
    try {
        const stdout = execFileSync(exePath, ['/S', `/D=${appPath}`], { encoding: 'utf8' });
        // console.log('stdout:', stdout);

        // checks for files exist in directory
        const filesToCheck = ['IQTest.dll', 'IQTestAPI.dll', 'IQDVT.exe', 'IQDVT-CLI.exe', 'exports.txt'];
        let isFilesIncludes = false;

        const files = fs.readdirSync(`${appPath}${isBinFolder ? '/Bin' : ''}`);

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
        console.log('installValidateSync - error:', err);
        return false;
    }

}

module.exports = installValidate;