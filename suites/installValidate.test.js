const installValidate = require('../tests/installValidate');


(async () => {
    
    // eran version
    // const installPath = './executions/IQDVT-Celeno-6XXX_1.0.0_x64.exe';

    // naama's update
    const installPath = './executions/IQDVT-CL_8XXX_1.0.9_x64 uninst broken.exe';

    // correct install
    // const installPath = './executions/IQDVT-CL_8XXX_1.0.10_x64.exe';

    // incorrect install
    // const installPath = './executions/IQDVT-CL_8XXX-Temp-14-02-2023_1.0.9_x64.exe';

    const isPass = await installValidate(installPath);
    console.log('~~ is Installed:', isPass);
})();