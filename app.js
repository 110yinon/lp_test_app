const fsPromise = require('node:fs/promises');
const fs = require('fs');
// const util = require('util');
// const execFile = util.promisify(require('child_process').execFile);
const { execFile } = require('child_process');
const path = require('path');
const { spawn } = require('node:child_process');

// const { execFileSync } = require('node:child_process');

const appPath = 'C:\\IQDVT_TEST\\';
const iqdvtCli = `${appPath}\\Bin\\IQDVT-CLI.exe`;
const flowDir = 'c:\LitePoint\flows\celeno_flow_16_02_2023.flow';
const stationDir = 'c:\LitePoint\stations\celeno_16_02_2023.sta';
'IQDVT-CLI.exe --flow=c:\\LitePoint\\flows\\celeno_flow_16_02_2023.flow --station=c:\\LitePoint\\stations\\celeno_16_02_2023.sta'
// console.log('a');
paramArr = ['--v1','--flow=c:\\LitePoint\\flows\\celeno_flow_16_02_2023.flow', '--station=c:\\LitePoint\\stations\\celeno_16_02_2023.sta']
const ef = execFile('C:\\IQDVT_TEST\\Bin\\IQDVT-CLI.exe', paramArr, {'cwd':'C:\\IQDVT_TEST\\Bin'}, (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stdout.includes('PASS'));
})

// ef.stdout.on('data', data => {
//     console.log(data.toString());
// });
// console.log('b');

// setTimeout(() => {
//     fs.readdir('c:/', (err, files) => {
//         console.log('e');

//         console.log(files);
//         console.log('f');

//     });
// }, 0)

// console.log('c');

// ef.on('close', (code) => {
//     console.log(`child process close all stdio with code ${code}`);
//     fs.readdir('c:/IQDVT_TEST/Bin', (err, files) => {
//         console.log('e');

//         console.log(files,files.length);
//         console.log('f');

//     });
// });