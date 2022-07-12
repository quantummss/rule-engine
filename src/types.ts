export interface Mappers { 
    [key: string]: string
}

export interface Condition<T, G> {
    type: string;
    code: string;
    metadata: G;
    // Configurations need to come as a generic type T
    configurations: T;
}

// Same as condition, segregating as we might have some additional attributes in future.
export type Action<T, G> = {
    type: string;
    code: string;
    metadata: G;
    // Configurations need to come as a generic type T
    configurations: T;
}

export interface Conditional<T, G> {
    apply: string;
    conditions: Condition<T, G>[],
    actions: Action<T, G>[]
}

export interface Rule<T, G> {
    conditionals: Conditional<T, G>[]
}

export type ConditionalExtentions<T, G> = Condition<T, G> | Action<T, G>