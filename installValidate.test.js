const installValidate = require('./installValidate');



installValidate('C:/LitePoint/IQDVT-CL_8XXX-Temp-14-02-2023/IQDVT-CL_8XXX-Temp-14-02-2023_1.0.9/Bin')
    .then(installed => console.log('~~ Installed correctly:', installed))
