const fsPromise = require('node:fs/promises');
const fs = require('fs');
// const util = require('util');
// const execFile = util.promisify(require('child_process').execFile);
const { execFile } = require('child_process');
const path = require('path');
const { spawn } = require('node:child_process');

// const { execFileSync } = require('node:child_process');

const appPath = 'C:\\IQDVT_TEST\\';
const flowDir = 'c:\\LitePoint\\flows\\Flow.flow';
const flowDir1 = 'c:\\LitePoint\\flows\\celeno_flow_16_02_2023.flow';
const stationDir = 'c:\\LitePoint\\stations\\celeno_16_02_2023.sta';


paramArr = ['--v1', `--station=${stationDir}`, `--flow=${flowDir1}`];
const ef = execFile('C:\\IQDVT_TEST\\Bin\\IQDVT-CLI.exe', paramArr, { 'cwd': 'C:\\IQDVT_TEST\\Bin' }, (err, stdout, stderr) => {

    const [, testsSummary] = stdout.split('Summary:');

    // console.log('is connected to DUT:', stdout.includes('Connect finished successfully'));
    console.log('is test pass:', !testsSummary.includes('FAILED'));
})

// fs.readdir('c:/IQDVT_TEST/Bin', (err, files) => {
//     console.log('e');

//     console.log(files, files.length);
//     console.log('f');

// });