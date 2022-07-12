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
exports.ComparisonCondition = exports.ComparisonOperators = void 0;
const base_conditional_1 = require("../base_conditional");
const lodash_1 = require("lodash");
const configuration_1 = require("../configuration");
var ComparisonOperators;
(function (ComparisonOperators) {
    ComparisonOperators["GREATER_THAN"] = "gt";
    ComparisonOperators["GREATER_THAN_EQUAL_TO"] = "gte";
    ComparisonOperators["LESS_THAN"] = "lt";
    ComparisonOperators["LESS_THAN_EQUAL_TO"] = "lte";
    ComparisonOperators["EQUAGE"] = "equate";
})(ComparisonOperators = exports.ComparisonOperators || (exports.ComparisonOperators = {}));
class ComparisonCondition extends base_conditional_1.BaseConditional {
    process() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, lodash_1.result)('this', this.operator);
        });
    }
    // Reaches with meta code
    equate() {
        return this.with === this.from;
    }
    gt() {
        return this.from > this.with;
    }
    gte() {
        return this.from >= this.with;
    }
    lt() {
        return this.from < this.with;
    }
    lte() {
        return this.from <= this.with;
    }
    get with() {
        return this.getConfiguration(this.configurations.with);
    }
    get from() {
        return this.getConfiguration(this.configurations.from);
    }
    get operator() {
        return this.configurations.operator;
    }
}
exports.ComparisonCondition = ComparisonCondition;
configuration_1.Configuration.addRule('comparison', ComparisonCondition);
//# sourceMappingURL=comparison.condition.js.map