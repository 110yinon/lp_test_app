const uninstallValidateSync = require('../tests/uninstallValidateSync');

(() => {
    const isPass = uninstallValidateSync();
    console.log('~~ is Uninstalled:', isPass);
})();