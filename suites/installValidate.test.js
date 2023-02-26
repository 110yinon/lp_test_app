const installValidate = require('../tests/installValidate');


// version w/o exports.txt creating
// installValidate('C:/Users/ybarhum/Downloads/IQDVT-CL_8XXX-Temp-14-02-2023_1.0.9_x64.exe')

// version with exports.txt creating
installValidate('C:/Users/ybarhum/Downloads/IQDVT-CL_8XXX_1.0.10_x64.exe')
    .then(installed => console.log('~~ Installed correctly:', installed))

// installValidate('')
//     .then(installed => console.log('~~ Installed correctly:', installed))