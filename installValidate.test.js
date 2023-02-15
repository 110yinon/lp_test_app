const installValidate = require('./installValidate');



installValidate('C:/Users/ybarhum/Downloads/IQDVT-CL_8XXX-Temp-14-02-2023_1.0.9_x64.exe')
    .then(installed => console.log('~~ Installed correctly:', installed))

// installValidate('')
//     .then(installed => console.log('~~ Installed correctly:', installed))