
const path = require('path');

const { execFileSync } = require('child_process');

function flowANDstationValidateSync(...flags) {

    // 'no-order' feature - we can put flow | station first - and it works
    const [station] = flags.filter(flag => flag.includes('.sta'));
    const [flow] = flags.filter(flag => flag.includes('.flow'));
    if (!station) {
        console.log("no '.sta' file");
        return false;
    }
    if (!flow) {
        console.log("no '.flow' file");
        return false;
    }


    // make sure we always get the c:\........\test - main folder
    // though we run from ./runner.test.js | ./suites/flow&station.test.js
    const testMainDir = path.resolve(__dirname.split('test - main')[0], 'test - main');

    const stationDir = path.resolve(testMainDir, 'stations', station);
    const flowDir = path.resolve(testMainDir, 'flows', flow);

    // console.log('stationDir:', stationDir);
    // console.log('flowDir:', flowDir);

    const paramArr = ['--v1', `--station=${stationDir}`, `--flow=${flowDir}`];

    try {
        const stdout = execFileSync('IQDVT-CLI.exe', paramArr, { cwd: 'C:\\IQDVT_TEST\\Bin', encoding: 'utf8' });
        // console.log('stdout:', stdout);

        // gets the test summray section from the output:
        const [, testsSummary] = stdout.split('Summary:');
        
        // checks for failed tests on the tests summray:
        // console.log('is test pass:', !testsSummary.includes('FAILED'));
        return !testsSummary.includes('FAILED');
    }
    catch (stderr) {
        console.log('stderr', stderr);
        return false;
    }
}


module.exports = flowANDstationValidateSync;