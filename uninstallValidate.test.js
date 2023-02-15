const uninstallValidate = require('./uninstallValidate');


uninstallValidate()
    .then(isUninstalled => {
        console.log('~~ is uninstalled:', isUninstalled);
    })
