import { BaseConditional } from "../base_conditional";
import { result } from "lodash";
import { Configuration } from "../configuration";

export enum ComparisonOperators {
    GREATER_THAN = 'gt',
    GREATER_THAN_EQUAL_TO = 'gte',
    LESS_THAN = 'lt',
    LESS_THAN_EQUAL_TO = 'lte',
    EQUAGE = 'equate'
}

export type ComparisonObject = {
    operator: ComparisonOperators;
    with: string;
    from: string;
}

export type ComparisonMetadata = {
   compare_with: string | number;
   compare_from: string | number;
}

export class ComparisonCondition extends BaseConditional<ComparisonObject, ComparisonMetadata> {
    public async process(): Promise<boolean> {
        return result('this', this.operator);
    }

    // Reaches with meta code
    private equate(): boolean {
        return this.with === this.from;
    }

    private gt(): boolean {
        return this.from > this.with;
    }

    private gte(): boolean {
        return this.from >= this.with;
    }

    private lt(): boolean {
        return this.from < this.with;
    }

    private lte(): boolean {
        return this.from <= this.with;
    }

    private get with() {
        return this.getConfiguration(this.configurations.with);
    }

    private get from() {
        return this.getConfiguration(this.configurations.from);
    }

    private get operator(): ComparisonOperators {
        return this.configurations.operator;
    }
}

Configuration.addRule('comparison', ComparisonCondition);