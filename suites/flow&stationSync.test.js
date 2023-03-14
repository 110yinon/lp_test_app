// const flowANDstationValidate = require('../tests/flow&station');
const flowANDstationValidateSync = require('../tests/flow&StationSync');



(() => {
    const isBinFolder = false;
    const isPass = flowANDstationValidateSync(isBinFolder, 'station-CL6.sta', './CL-6 flows/iterate-cl6.flow');
    console.log('cli flow run is pass:', isPass);
})();

