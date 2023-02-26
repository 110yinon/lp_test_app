const flowANDstationValidate = require('../tests/flow&station');


// opt 1 - doesnt wait for the execFile cb to return
// const result = flowANDstationValidate();
// console.log('result:', result);

// opt 2 - preffered - that's how to work with CB's ! ! ! !
flowANDstationValidate((result) => {
    console.log('result:', result);
});

// opt 3 - convert the execFile to return promise and than to run the opt 1 above ^^