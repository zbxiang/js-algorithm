/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
export function compareTo(a, b) {
    if (a === b) return 0
    if (a > b) return 1
    return -1
}