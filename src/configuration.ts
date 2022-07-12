import { Mappers } from "./types";

let defaultConfiguration: Configuration;

export class Configuration {
    private _conditionalMapper: Mappers = {};
    private _actionMapper: Mappers = {};
    private values: Mappers = {};

    public static get(name: string): any {
        if (defaultConfiguration) {
            return defaultConfiguration.values[name];
        }
    }

    public static get conditionalMapper(): Mappers {
        return defaultConfiguration.conditionalMapper;
    }

    public static get actionMapper(): Mappers {
        return defaultConfiguration._actionMapper;
    }

    public static addRule(name: string, schema: any): void {
        defaultConfiguration.addRule(name, schema);
    }

    public static addAction(name: string, schema: any): void {
        defaultConfiguration.addAction(name, schema);
    }

    public get conditionalMapper(): Mappers{
        return this._conditionalMapper;
    }

    public get actionMapper(): Mappers {
        return this._actionMapper;
    }

    public addRule(name: string, schema: any): void {
        if (this.conditionalMapper[name]) {
            throw `Rule has already been added, ${name}`;
        }

        this._conditionalMapper[name] = schema;
    }

    public addAction(name: string, schema: any): void {
        if (this.actionMapper[name]) {
            throw `Action has already been added ${name}`;
        }

        this._actionMapper[name] = schema;
    }
}

export function initializeRuleEngine() {
    defaultConfiguration = new Configuration();
}