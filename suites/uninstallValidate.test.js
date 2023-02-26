const uninstallValidate = require('../tests/uninstallValidate');

(async () => {
    const isPass = await uninstallValidate();
    console.log('~~ is Uninstalled:', isPass);
})();