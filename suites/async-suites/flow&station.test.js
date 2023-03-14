// const flowANDstationValidate = require('../tests/flow&station');
const flowANDstationValidate = require('../tests/flow&station');



(async () => {
    console.log('1');
    const res = await flowANDstationValidate('celeno_16_02_2023.sta', 'txCal.flow');
    console.log('result:', res);
    console.log('2');
})();

