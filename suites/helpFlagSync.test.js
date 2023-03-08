const helpFlagValidateSync = require('../tests/helpFlagSync');


(() => {
    const isPass = helpFlagValidateSync();
    console.log('~~ is help flag:', isPass);
})();