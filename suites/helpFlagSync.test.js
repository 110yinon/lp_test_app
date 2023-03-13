const helpFlagValidateSync = require('../tests/helpFlagSync');


(() => {
    const isBinFolder = false;
    const isPass = helpFlagValidateSync(isBinFolder);
    console.log('~~ is help flag:', isPass);
})();