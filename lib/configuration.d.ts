import { Mappers } from "./types";
export declare class Configuration {
    private _conditionalMapper;
    private _actionMapper;
    private values;
    static get(name: string): any;
    static get conditionalMapper(): Mappers;
    static get actionMapper(): Mappers;
    static addRule(name: string, schema: any): void;
    static addAction(name: string, schema: any): void;
    get conditionalMapper(): Mappers;
    get actionMapper(): Mappers;
    addRule(name: string, schema: any): void;
    addAction(name: string, schema: any): void;
}
export declare function initializeRuleEngine(): void;
