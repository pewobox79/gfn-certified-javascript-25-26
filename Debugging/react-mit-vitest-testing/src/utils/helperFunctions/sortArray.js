export const sortArray = (arr, direction = "asc") => {

    if (!Array.isArray(arr)) return 'not an array'

    if (typeof arr[0] === 'number') {
        if (direction === "asc") {
            return [...arr].sort((a, b) => a - b)
        }
        return [...arr].sort((a, b) => b - a)
    }

    if (direction === "asc") {
        return [...arr].sort();
    } else {
        return [...arr].sort((a, b) => b.localeCompare(a));
    }
}