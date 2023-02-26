const installValidate = require('./installValidate');
const uninstallValidate = require('./uninstallValidate');


(
    async () => {
        console.log('runner');
        
        // correct install
        // const installPath = './executions/IQDVT-CL_8XXX_1.0.10_x64.exe';
        
        // incorrect install
        const installPath = './executions/IQDVT-CL_8XXX-Temp-14-02-2023_1.0.9_x64.exe';

        let isPass = await installValidate(installPath);
        console.log('~~ is Installed:', isPass);
        if (!isPass) return;

        isPass = await uninstallValidate();
        console.log('~~ is Uninstalled:', isPass);
        if (!isPass) return;

        await installValidate(installPath)
        console.log('~~ is Installed:', isPass);
        if (!isPass) return;
    }
)();