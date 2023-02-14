const fsPromise = require('node:fs/promises');

async function validateInstall(dirPath) {

    const filesToCheck = ['IQTest.dll', 'IQTestAPI.dll', 'IQDVT.exe', 'IQDVT-CLI.exe'];
    let isFilesIncludes = false;

    const files = await fsPromise.readdir(dirPath);

    // checks for files exist in directory
    isFilesIncludes = filesToCheck.every(file => {
        return files.includes(file);
    });
    console.log('isFilesIncludes', isFilesIncludes);

    return isFilesIncludes;
}

module.exports = validateInstall;