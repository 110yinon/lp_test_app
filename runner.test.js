const helpFlagValidate = require('./tests/helpFlag');
const installValidate = require('./tests/installValidate');
const uninstallValidate = require('./tests/uninstallValidate');
const flowANDstationValidate = require('./tests/flow&station');

(
    async () => {
        console.log('runner');
        
        // eran version
        // const installPath = './executions/IQDVT-Celeno-6XXX_1.1.1_x64.exe';
        
        // correct install
        const installPath = './executions/IQDVT-CL_8XXX_1.0.9_x64 uninst broken.exe';
        
        // incorrect install
        // const installPath = './executions/IQDVT-CL_8XXX-Temp-14-02-2023_1.0.9_x64.exe';

        // let isInstall = await installValidate(installPath);
        // console.log('~~ is Installed:', isInstall);
        // if (!isInstall) return;

        // const isUnInstall = await uninstallValidate();
        // console.log('~~ is Uninstalled:', isUnInstall);
        // if (!isUnInstall) return;

        // isInstall = await installValidate(installPath)
        // console.log('~~ is Installed:', isInstall);
        // if (!isInstall) return;

        // const isHelpFlag = await helpFlagValidate();
        // console.log('~~ is help flag:', isHelpFlag);
        // if (!isHelpFlag) return;

        let flowPass = await flowANDstationValidate('celeno_16_02_2023.sta', 'txCal.flow');
        console.log('~~ flow Pass:', flowPass);
        // if (!flowPass) return;

        const flowPass1 = await flowANDstationValidate('celeno_16_02_2023.sta', 'pass-pass-failed.flow');
        console.log('~~ flow Pass:', flowPass1);
        // if (!flowPass1) return;

        const flowPass2 = await flowANDstationValidate('celeno_16_02_2023.sta', 'failed-pass-pass.flow');
        console.log('~~ flow Pass:', flowPass2);
        // if (!flowPass2) return;

        const flowPass3 = await flowANDstationValidate('celeno_16_02_2023.sta', 'pass-failed-pass.flow');
        console.log('~~ flow Pass:', flowPass3);
        // if (!flowPass3) return;

        flowPass = await flowANDstationValidate('celeno_16_02_2023.sta', 'txCal.flow');
        console.log('~~ flow Pass:', flowPass);
        
    }
)();