const helpFlagValidate = require('./tests/helpFlag');
const installValidate = require('./tests/installValidate');
const uninstallValidate = require('./tests/uninstallValidate');


(
    async () => {
        console.log('runner');
        
        // correct install
        const installPath = './executions/IQDVT-CL_8XXX_1.0.10_x64.exe';
        
        // incorrect install
        // const installPath = './executions/IQDVT-CL_8XXX-Temp-14-02-2023_1.0.9_x64.exe';

        let isInstall = await installValidate(installPath);
        console.log('~~ is Installed:', isInstall);
        if (!isInstall) return;

        const isUnInstall = await uninstallValidate();
        console.log('~~ is Uninstalled:', isUnInstall);
        if (!isUnInstall) return;

        isInstall = await installValidate(installPath)
        console.log('~~ is Installed:', isInstall);
        if (!isInstall) return;

        const isHelpFlag = await helpFlagValidate();
        console.log('~~ is help flag:', isHelpFlag);
        if (!isHelpFlag) return;

        
    }
)();