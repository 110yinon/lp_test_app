const helpFlagValidate = require('./tests/helpFlag');
const installValidate = require('./tests/installValidate');
const uninstallValidate = require('./tests/uninstallValidate');
const flowANDstationValidate = require('./tests/flow&station');

(
    async () => {

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

        test("'tx Calibration' flow to pass", async () => {
            expect(await flowANDstationValidate('celeno_16_02_2023.sta', 'txCal.flow'))
                .toBe(true);
        });

        test("'pass-pass-failed' flow to failed", async () => {
            expect(await flowANDstationValidate('celeno_16_02_2023.sta', 'pass-pass-failed.flow'))
                .toBe(false)
        });

        test("'failed-pass-pass' flow to failed", async () => {
            expect(await flowANDstationValidate('celeno_16_02_2023.sta', 'failed-pass-pass.flow'))
                .toBe(false)
        });

        test("'pass-failed-pass' flow to failed", async () => {
            expect(await flowANDstationValidate('celeno_16_02_2023.sta', 'pass-failed-pass.flow'))
                .toBe(false)
        });

        test("'11axRx' flow to pass", async () => {
            expect(await flowANDstationValidate('celeno_16_02_2023.sta', '11axRx.flow'))
                .toBe(true)
        });

    }
)();