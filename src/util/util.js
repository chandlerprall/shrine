// returns a new sorted array without mutating the source array
export function safeSort(array) {
    return array.slice().sort();
}