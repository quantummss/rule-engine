export interface Mappers {
    [key: string]: string;
}
export interface Condition<T, G> {
    type: string;
    code: string;
    metadata: G;
    configurations: T;
}
export declare type Action<T, G> = {
    type: string;
    code: string;
    metadata: G;
    configurations: T;
};
export interface Conditional<T, G> {
    apply: string;
    conditions: Condition<T, G>[];
    actions: Action<T, G>[];
}
export interface Rule<T, G> {
    conditionals: Conditional<T, G>[];
}
export declare type ConditionalExtentions<T, G> = Condition<T, G> | Action<T, G>;
