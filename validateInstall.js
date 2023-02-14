const fsPromise = require('node:fs/promises');

async function validateInstall(dirPath) {    

    const numFiles = 33;
    const filesToCheck = ['IQTest.dll', 'IQTestAPI.dll', 'IQDVT.exe', 'IQDVT-CLI.exe'];
    let isFilesIncludes = false;

    const files = await fsPromise.readdir(dirPath);

    // checks for files exist in directory
    const isNumFilesCorrect = numFiles === files.length;
    console.log('isNumFilesCorrect', isNumFilesCorrect);
    if (!isNumFilesCorrect) return false;

    // checks for files exist in directory
    isFilesIncludes = filesToCheck.every(file => {
        return files.includes(file);
    });
    console.log('isFilesIncludes', isFilesIncludes);

    return isNumFilesCorrect && isFilesIncludes;
}

module.exports = validateInstall;