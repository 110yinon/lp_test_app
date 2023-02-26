const installValidate = require('./installValidate');
const uninstallValidate = require('./uninstallValidate');


(
    async () => {
        // opt 1
        // console.log('runner');
        // installValidate('C:/Users/ybarhum/Downloads/IQDVT-CL_8XXX_1.0.10_x64.exe')
        //     .then((res) => {
        //         console.log('~~ is Installed:', res);
        //         console.log('1');
        //         return uninstallValidate()
        //     })
        //     .then((res) => {
        //         console.log('~~ is Uninstalled:', res);
        //         console.log('2');
        //         return installValidate('C:/Users/ybarhum/Downloads/IQDVT-CL_8XXX_1.0.10_x64.exe')
        //     })
        //     .then((res) => {
        //         console.log('~~ is Installed:', res);
        //         console.log('3');
        //     })
        // console.log('4');
        


        // opt 2 (prefered)
        console.log('runner');
        let res = await installValidate('C:/Users/ybarhum/Downloads/IQDVT-CL_8XXX_1.0.10_x64.exe');
        console.log('~~ is Installed:', res);
        console.log('1');

        res = await uninstallValidate();
        console.log('~~ is Uninstalled:', res);
        console.log('2');

        await installValidate('C:/Users/ybarhum/Downloads/IQDVT-CL_8XXX_1.0.10_x64.exe')
        console.log('~~ is Installed:', res);        
        console.log('3');
        console.log('4');
    }
)();