const { execFileSync } = require('child_process');


function flowANDstationValidate(cb) {
    const stationDir = 'c:\\LitePoint\\stations\\celeno_16_02_2023.sta';
    const flowDir = 'c:\\LitePoint\\flows\\txCal.flow';

    const paramArr = ['--v1', `--station=${stationDir}`, `--flow=${flowDir}`];
    // const paramArr = ['--v1'];
    const stdout = execFileSync('IQDVT-CLI.exe', paramArr, { cwd: 'C:\\IQDVT_TEST\\Bin', encoding: 'utf8' });

    console.log(stdout);

    const [, testsSummary] = stdout.split('Summary:');

    // case of no startupFiles.json | startupFiles.json is empty
    if (!testsSummary) {
        console.log('is test pass:', false);
        return cb(false);
    }

    console.log('is test pass:', !testsSummary.includes('FAILED'));
    return cb(!testsSummary.includes('FAILED'));
}


module.exports = flowANDstationValidate;