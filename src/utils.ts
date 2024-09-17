export function reverse<T>(array: T[]): T[] {
    return array.slice().reverse();
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function dropRight<T>(array: T[], n: number = 1): T[]{
    return array.slice(0, -n)
}