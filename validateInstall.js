const fsPromise = require('node:fs/promises');
const fs = require('fs');
const { execFile, exec } = require('child_process');

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

    // const isKuni = [1, 2, 3, 4, 5].every(num => {
    //     return [5, 4, 3, 2, 1].includes(num);
    // });
    // console.log('isKuni', isKuni);

    // isFilesIncludes = files.every(file => {
    //     return filesToCheck.includes(file);
    // });

    isFilesIncludes = filesToCheck.every(file => {
        return files.includes(file);
    });
    console.log('isFilesIncludes', isFilesIncludes);
    // if (isFilesIncludes) return false;

    // files.forEach(file => {
    //     isFilesIncludes = filesToCheck.includes(file);
    //     if (isFilesIncludes) return false;
    // });

    return isNumFilesCorrect && isFilesIncludes;
    // filesToCheck.forEach(file => {
    //     files.includes(file);
    // });

    // fs.readdir(dirPath, (err, files) => {
    //     filesToCheck.forEach(file => {
    //         files.includes(file);
    //     });
    //     // console.log(files.includes(filesToCheck[0]));

    // })



}

module.exports = validateInstall;