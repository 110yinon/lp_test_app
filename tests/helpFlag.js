const { execFile } = require('child_process');


function helpFlagValidate(cb) {

    // no 'help' flag version:
    // const ef = execFile('C:\LitePoint\IQDVT-CL_8XXX-Temp-14-02-2023\IQDVT-CL_8XXX-Temp-14-02-2023_1.0.9\Bin>IQDVT-CLI.exe', ['--help'], { 'cwd': 'C:\\IQDVT_TEST\\Bin' }, (err, stdout, stderr) => {

    // 'help' flag version:
    const ef = execFile('C:\\IQDVT_TEST\\Bin\\IQDVT-CLI.exe', ['--help'], { 'cwd': 'C:\\IQDVT_TEST\\Bin' }, (err, stdout, stderr) => {
        // console.log(stdout);

        if (stdout.includes('IQDVT-CLI.exe [options]')) {
            return cb(true);
        }
        return cb(false);
    });
}

module.exports = helpFlagValidate;