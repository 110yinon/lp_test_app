const helpFlagValidate = require('../tests/helpFlag');


(async () => {
    const isPass = await helpFlagValidate();
    console.log('~~ is help flag:', isPass);
})();