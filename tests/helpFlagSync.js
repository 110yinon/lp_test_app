const { execFileSync } = require('child_process');


function helpFlagValidateSync(isBinFolder) {
    // console.log('helpFlagValidate');
    try {
        const stdout = execFileSync('IQDVT-CLI.exe', ['--help'], { 'cwd': `C:\\IQDVT_TEST\\${isBinFolder ? 'Bin' : ''}` });
        // console.log('stdout:', stdout);

        if (stdout.includes('IQDVT-CLI.exe [options]')) {
            return true;
        }
        return false;
    }
    catch (err) {
        console.log('helpFlagValidate - error:', err);
        return false;
    }
}

module.exports = helpFlagValidateSync;