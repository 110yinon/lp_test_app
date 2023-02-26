const util = require('util');
const execFile = util.promisify(require('child_process').execFile);


async function helpFlagValidate() {
    try {
        const { stdout, stderr } = await execFile('C:\\IQDVT_TEST\\Bin\\IQDVT-CLI.exe', ['--help'], { 'cwd': 'C:\\IQDVT_TEST\\Bin' });
        // console.log('stdout:', stdout);
        // console.log('stderr:', stderr);

        if (stdout.includes('IQDVT-CLI.exe [options]')) {
            return true;
        }
        return false;
    }
    catch (err) {
        console.log('helpFlagValidate - error:', err);
    }
}

module.exports = helpFlagValidate;