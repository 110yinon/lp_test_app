const util = require('util');
const execFile = util.promisify(require('child_process').execFile);


async function flowANDstationValidate() {
    const stationDir = 'c:\\LitePoint\\stations\\celeno_16_02_2023.sta';
    const flowDir = 'c:\\LitePoint\\flows\\txCal.flow';

    const paramArr = ['--v1', `--station=${stationDir}`, `--flow=${flowDir}`];
    // const paramArr = ['--v1'];

    const { stdout, stderr } = await execFile('IQDVT-CLI.exe', paramArr, { cwd: 'C:\\IQDVT_TEST\\Bin', encoding: 'utf8' });

    console.log('stdout:', stdout);
    console.log('stderr', stderr);

    // gets the test summray section from the output:
    const [, testsSummary] = stdout.split('Summary:');

    // for Older version where startupFiles is must:
    // case of no startupFiles.json | startupFiles.json is empty
    if (!testsSummary) {
        console.log('is test pass:', false);
        return false;
    }
    // checks for failed tests on the tests summray:
    console.log('is test pass:', !testsSummary.includes('FAILED'));
    return !testsSummary.includes('FAILED');
}


module.exports = flowANDstationValidate;