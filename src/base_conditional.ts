import { Action, Condition, ConditionalExtentions, Mappers, Rule } from "./types";
import { get as getPath } from 'lodash';

export class BaseConditional<T, G> {
    private _rule: Rule<T, G>;
    private _attributes: any;
    private _conditional: Condition<T, G> | Action<T, G>;
    public params: any;

    constructor(rule: Rule<T, G>, attributes: any, conditional: ConditionalExtentions<T, G>) {
        this._rule = rule;
        this._attributes = attributes;
        this._conditional = conditional;
        this.params = { attributes: attributes, metadata: this.metadata };
    }

    /**
     * Get the current rule implementation.
     */
    public get rule() {
        return this._rule; 
    }

    /**
     * This is the prehook for all the rules and actions.
     */
    public async run(): Promise<boolean> {
        return await this.process();
    }

    /**
     * Process is the main process runner for the condition and action. All action or condition classes should 
     * have this as the entry point of their classes.
     */
    public async process(): Promise<boolean> {
        return true;
    }

    /**
     * Conditional is the base condition or action of the current object
     */
    public get conditional(): ConditionalExtentions<T, G>  {
        return this._conditional;
    }

    /**
     * All the metadata will be accessible from here. Metadata are read only so not adding addional set attributes
     * Metadata will mainly contain data which can be used by configurations
     */
    public get metadata(): G {
        return this.conditional.metadata;
    }

    /**
     * Configurations are those values that point to either metadata or attributes. This will mainly be 
     * written as metadata.* or attributes.*
     */
    public get configurations(): T {
        return this.conditional.configurations;
    }

    /**
     * attributes are the values that is send by rule engine. These values can be dynamic based on 
     * a particular rule.  
     */
    public get attributes(): any {
        return this._attributes;
    }

    /**
     * Get value from configuration
     */
    public getConfiguration(key: string) {
        return getPath(this.params, key);
    }
}