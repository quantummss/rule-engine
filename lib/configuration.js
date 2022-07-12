"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeRuleEngine = exports.Configuration = void 0;
let defaultConfiguration;
class Configuration {
    constructor() {
        this._conditionalMapper = {};
        this._actionMapper = {};
        this.values = {};
    }
    static get(name) {
        if (defaultConfiguration) {
            return defaultConfiguration.values[name];
        }
    }
    static get conditionalMapper() {
        return defaultConfiguration.conditionalMapper;
    }
    static get actionMapper() {
        return defaultConfiguration._actionMapper;
    }
    static addRule(name, schema) {
        defaultConfiguration.addRule(name, schema);
    }
    static addAction(name, schema) {
        defaultConfiguration.addAction(name, schema);
    }
    get conditionalMapper() {
        return this._conditionalMapper;
    }
    get actionMapper() {
        return this._actionMapper;
    }
    addRule(name, schema) {
        if (this.conditionalMapper[name]) {
            throw `Rule has already been added, ${name}`;
        }
        this._conditionalMapper[name] = schema;
    }
    addAction(name, schema) {
        if (this.actionMapper[name]) {
            throw `Action has already been added ${name}`;
        }
        this._actionMapper[name] = schema;
    }
}
exports.Configuration = Configuration;
function initializeRuleEngine() {
    defaultConfiguration = new Configuration();
}
exports.initializeRuleEngine = initializeRuleEngine;
//# sourceMappingURL=configuration.js.map