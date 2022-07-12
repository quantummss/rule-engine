import { ConditionalExtentions, Rule } from "./types";
export declare class BaseConditional<T, G> {
    private _rule;
    private _attributes;
    private _conditional;
    params: any;
    constructor(rule: Rule<T, G>, attributes: any, conditional: ConditionalExtentions<T, G>);
    /**
     * Get the current rule implementation.
     */
    get rule(): Rule<T, G>;
    /**
     * This is the prehook for all the rules and actions.
     */
    run(): Promise<boolean>;
    /**
     * Process is the main process runner for the condition and action. All action or condition classes should
     * have this as the entry point of their classes.
     */
    process(): Promise<boolean>;
    /**
     * Conditional is the base condition or action of the current object
     */
    get conditional(): ConditionalExtentions<T, G>;
    /**
     * All the metadata will be accessible from here. Metadata are read only so not adding addional set attributes
     * Metadata will mainly contain data which can be used by configurations
     */
    get metadata(): G;
    /**
     * Configurations are those values that point to either metadata or attributes. This will mainly be
     * written as metadata.* or attributes.*
     */
    get configurations(): T;
    /**
     * attributes are the values that is send by rule engine. These values can be dynamic based on
     * a particular rule.
     */
    get attributes(): any;
    /**
     * Get value from configuration
     */
    getConfiguration(key: string): any;
}
