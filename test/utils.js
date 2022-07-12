// const assert = require('assert');
const chalk = require('chalk');
const assert = require('assert');

// Need to add assert Helper utils

const Logger = {
    success(message) {
        console.log(chalk.green(`SUCCESS: ${message}`));
    },
    info(message) {
        console.log(chalk.yellow(`INFO: ${message}`));
    },
    error(message) {
        console.log(chalk.redBright(`ERROR: ${message}`));
    }
}

const Assert = {
    run(func, message, errMsg) {
        try {
            func();
            Logger.success(message);
        } catch(e) {
            Logger.error(errMsg);
        }
        // assert.throws(() => {
        //     func();
        //     Logger.success(message);
        // }, (err) => {
        //     Logger.error(errMsg);
        //     return true;
        // });
    },
    eq(from, withValue, message) {
        this.run(() => {
            assert.equal(from, withValue);
        }, 
        message || `Equated correctly!!!`,
        `Value is not equal ${from} with ${withValue}`)
    },
    equal (from, withValue) {
        assert.throws(() => {
            assert.equal(from, withValue);
        },
            (err) => {
                Logger.error(`Value is not equal ${from} with ${withValue}`);
                return true;
            }
        )
    }
}

module.exports = {
    Logger, Assert
};