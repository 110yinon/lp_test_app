const helpFlagValidate = require('./tests/helpFlag');
const installValidate = require('./tests/installValidate');
const uninstallValidate = require('./tests/uninstallValidate');
const flowANDstationValidate = require('./tests/flow&station');
const configFile = require('./config/config.runner.json');

(
    async () => {
        console.log(configFile.tests);
        configFile.tests.forEach(async (test, index) => {
            switch (test.command.toLowerCase()) {
                case 'cli':
                    console.log(index);
                    let res = await flowANDstationValidate(test.station, test.flow);
                    console.log('index:', index, test.comment, res === test.expect);

                    break;
                default:
                    break;
            }
        });


        // res = await flowANDstationValidate('celeno_16_02_2023.sta', 'iterate.flow');
        // console.log("~~ iterate 1", res);

        // res = await flowANDstationValidate('celeno_16_02_2023.sta', 'iterate.flow');
        // console.log("~~ iterate 2", res);

    }
)();