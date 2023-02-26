const helpFlagValidate = require('../tests/helpFlag');


helpFlagValidate((result) => {
    console.log("~ include '--help':", result);
});