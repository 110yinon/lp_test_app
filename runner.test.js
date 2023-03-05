const helpFlagValidate = require('./tests/helpFlag');
const installValidate = require('./tests/installValidate');
const uninstallValidate = require('./tests/uninstallValidate');
const flowANDstationValidate = require('./tests/flow&station');
const flowANDstationValidateSync = require('./tests/flow&StationSync');
const configFile = require('./config/config.runner.json');

// (
//     () => {
//         // SYNC VERSION - forEach - WORKS ALWAYS
//         const start = Date.now();

//         configFile.tests.forEach((test, index) => {
//             switch (test.command.toLowerCase()) {
//                 case 'cli':
//                     console.log(index);
//                     let res = flowANDstationValidateSync(test.station, test.flow);
//                     console.log('index:', index, test.comment, res === test.expect);
//                     break;
//                 default:
//                     break;
//             }
//         });
//         console.log('time elapsed:', Date.now() - start);
//     }
// )();




// (
//     () => {
//         // SYNC VERSION - WORKS ALWAYS
//         const start = Date.now();
//         let res = flowANDstationValidateSync(configFile.tests[0].station, configFile.tests[0].flow);
//         console.log('index:', 0, configFile.tests[0].comment, res === configFile.tests[0].expect);

//         let res1 = flowANDstationValidateSync(configFile.tests[1].station, configFile.tests[1].flow);
//         console.log('index:', 1, configFile.tests[1].comment, res1 === configFile.tests[1].expect);

//         let res2 = flowANDstationValidateSync(configFile.tests[2].station, configFile.tests[2].flow);
//         console.log('index:', 2, configFile.tests[2].comment, res2 === configFile.tests[2].expect);

//         let res3 = flowANDstationValidateSync(configFile.tests[3].station, configFile.tests[3].flow);
//         console.log('index:', 3, configFile.tests[3].comment, res3 === configFile.tests[3].expect);

//         let res4 = flowANDstationValidateSync(configFile.tests[4].station, configFile.tests[4].flow);
//         console.log('index:', 4, configFile.tests[4].comment, res4 === configFile.tests[4].expect);
//         console.log('time elapsed:', Date.now() - start);
//     }
// )();




// (
//     async () => {
//         //ASYNC VERSION - iterate - WORKS ALTERNATLY
//         const start = Date.now();
//         console.log(configFile.tests);
//         configFile.tests.forEach(async (test, index) => {
//             switch (test.command.toLowerCase()) {
//                 case 'cli':
//                     console.log(index);
//                     let res = await flowANDstationValidate(test.station, test.flow);
//                     console.log('index:', index, test.comment, res === test.expect);
//                     console.log('time elapsed:', Date.now() - start);
//                     break;
//                 default:
//                     break;
//             }
//         });
//     }
// )();


// (
//     async () => {
//         //ASYNC VERSION - WORKS ALTERNATLY
//         const start = Date.now();
//         let res = await flowANDstationValidate(configFile.tests[0].station, configFile.tests[0].flow);
//         console.log('index:', 0, configFile.tests[0].comment, res === configFile.tests[0].expect);

//         let res1 = await flowANDstationValidate(configFile.tests[1].station, configFile.tests[1].flow);
//         console.log('index:', 1, configFile.tests[1].comment, res1 === configFile.tests[1].expect);

//         let res2 = await flowANDstationValidate(configFile.tests[2].station, configFile.tests[2].flow);
//         console.log('index:', 2, configFile.tests[2].comment, res2 === configFile.tests[2].expect);

//         let res3 = await flowANDstationValidate(configFile.tests[3].station, configFile.tests[3].flow);
//         console.log('index:', 3, configFile.tests[3].comment, res3 === configFile.tests[3].expect);

//         let res4 = await flowANDstationValidate(configFile.tests[4].station, configFile.tests[4].flow);
//         console.log('index:', 4, configFile.tests[4].comment, res4 === configFile.tests[4].expect);
//         console.log('time elapsed:', Date.now() - start);

//     }
// )();