const ruleEngine = require('../lib');
const assert = require('assert');
const { Logger, Assert } = require('./utils');

// Atleast one rule needs to be there.
const conditionalMapper = ruleEngine.Configuration.conditionalMapper;
const actionMapper = ruleEngine.Configuration.actionMapper;
let rules = Object.keys(conditionalMapper)

Logger.info('Check default rules count');
assert.equal(rules.length, 1);
assert.equal(rules[0], 'comparison');
assert.deepEqual({}, actionMapper);

ruleEngine.Configuration.addRule('f', { trial: true });
rules = Object.keys(conditionalMapper);
assert.equal(rules.length, 2);
