const fs = require('fs');
const { execFile, exec } = require('child_process')
const validateInstall = require('./validateInstall');
const { log } = require('console');


// execFile('C:/Users/ybarhum/Downloads/IQDVT-CL_8XXX_1.0.9_x64.exe',['next'],(error,stdout,stderr)=>{
//     console.log(stdout)
// })

// exec('dir', (error, stdout, stderr) => {
//     console.log(stdout);
//     console.log(stdout.includes('File(s)'));
//     const str = 'awhtj File 9 File(s)';
//     const numFiles = str.indexOf('File(s)')-1
//     console.log();
// });

// const dir = './';

// fs.readdir(dir, (err, files) => {
//     console.log(files.length);
// })

// validateInstall('C:/Users/ybarhum/Desktop/IQDVT-win32-x64').then(kuni => {
validateInstall('C:/LitePoint/IQDVT-CL_8XXX-Temp-14-02-2023/IQDVT-CL_8XXX-Temp-14-02-2023_1.0.9/Bin').then(kuni => {
    // log(kuni);
})