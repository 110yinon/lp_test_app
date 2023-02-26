const { execFile } = require('child_process');


function flowANDstationValidate(cb) {
    const flowDir = 'c:\\LitePoint\\flows\\Flow.flow';
    const flowDir1 = 'c:\\LitePoint\\flows\\celeno_flow_16_02_2023.flow';
    const stationDir = 'c:\\LitePoint\\stations\\celeno_16_02_2023.sta';

    paramArr = ['--v1', `--station=${stationDir}`, `--flow=${flowDir1}`];
    const ef = execFile('C:\\IQDVT_TEST\\Bin\\IQDVT-CLI.exe', paramArr, { 'cwd': 'C:\\IQDVT_TEST\\Bin' }, (err, stdout, stderr) => {

        console.log(stdout);

        const [, testsSummary] = stdout.split('Summary:');

        // case of no startupFiles.json | startupFiles.json is empty
        if (!testsSummary) {
            console.log('is test pass:', false);
            return cb(false);
        }

        console.log('is test pass:', !testsSummary.includes('FAILED'));
        return cb(!testsSummary.includes('FAILED'));
    })
}


module.exports = flowANDstationValidate;