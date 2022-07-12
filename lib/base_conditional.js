"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseConditional = void 0;
const lodash_1 = require("lodash");
class BaseConditional {
    constructor(rule, attributes, conditional) {
        this._rule = rule;
        this._attributes = attributes;
        this._conditional = conditional;
        this.params = { attributes: attributes, metadata: this.metadata };
    }
    /**
     * Get the current rule implementation.
     */
    get rule() {
        return this._rule;
    }
    /**
     * This is the prehook for all the rules and actions.
     */
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.process();
        });
    }
    /**
     * Process is the main process runner for the condition and action. All action or condition classes should
     * have this as the entry point of their classes.
     */
    process() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    /**
     * Conditional is the base condition or action of the current object
     */
    get conditional() {
        return this._conditional;
    }
    /**
     * All the metadata will be accessible from here. Metadata are read only so not adding addional set attributes
     * Metadata will mainly contain data which can be used by configurations
     */
    get metadata() {
        return this.conditional.metadata;
    }
    /**
     * Configurations are those values that point to either metadata or attributes. This will mainly be
     * written as metadata.* or attributes.*
     */
    get configurations() {
        return this.conditional.configurations;
    }
    /**
     * attributes are the values that is send by rule engine. These values can be dynamic based on
     * a particular rule.
     */
    get attributes() {
        return this._attributes;
    }
    /**
     * Get value from configuration
     */
    getConfiguration(key) {
        return (0, lodash_1.get)(this.params, key);
    }
}
exports.BaseConditional = BaseConditional;
//# sourceMappingURL=base_conditional.js.map