const helpFlagValidate = require('../helpFlag');


helpFlagValidate((result) => {
    console.log("~ include '--help':", result);
});