// const flowANDstationValidate = require('../tests/flow&station');
const flowANDstationValidate = require('../tests/2flow&station');


// opt 1 - doesnt wait for the execFile cb to return
// const result = flowANDstationValidate();
// console.log('result:', result);

// opt 2 - preffered - that's how to work with CB's ! ! ! !
console.log('1');
flowANDstationValidate((result) => {
    console.log('result:', result);
});
console.log('2');

// opt 3 - convert the execFile to return promise and than to run the opt 1 above ^^