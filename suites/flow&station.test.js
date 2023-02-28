// const flowANDstationValidate = require('../tests/flow&station');
const flowANDstationValidate = require('../tests/flow&station');



(async () => {
    console.log('1');
    const res = await flowANDstationValidate();
    console.log('result:', res);
    console.log('2');
})();

