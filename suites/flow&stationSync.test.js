// const flowANDstationValidate = require('../tests/flow&station');
const flowANDstationValidateSync = require('../tests/flow&StationSync');



(() => {
    const isBinFolder = true;
    const isPass = flowANDstationValidateSync(isBinFolder, 'celeno_16_02_2023.sta', 'txCal.flow');
    console.log('cli flow run is pass:', isPass);
})();

