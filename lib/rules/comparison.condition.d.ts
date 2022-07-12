import { BaseConditional } from "../base_conditional";
export declare enum ComparisonOperators {
    GREATER_THAN = "gt",
    GREATER_THAN_EQUAL_TO = "gte",
    LESS_THAN = "lt",
    LESS_THAN_EQUAL_TO = "lte",
    EQUAGE = "equate"
}
export declare type ComparisonObject = {
    operator: ComparisonOperators;
    with: string;
    from: string;
};
export declare type ComparisonMetadata = {
    compare_with: string | number;
    compare_from: string | number;
};
export declare class ComparisonCondition extends BaseConditional<ComparisonObject, ComparisonMetadata> {
    process(): Promise<boolean>;
    private equate;
    private gt;
    private gte;
    private lt;
    private lte;
    private get with();
    private get from();
    private get operator();
}
