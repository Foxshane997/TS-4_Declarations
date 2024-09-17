declare module 'my-utils' {

    export function reverse<T>(array: T[]): T[];

    export function multiply(a: number, b: number): number

    export function dropRight<T>(array: T[], n?: number): T[]
}