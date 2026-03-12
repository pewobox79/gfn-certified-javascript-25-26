import { test, describe, expect } from "vitest";
import { sortArray } from "../helperFunctions/sortArray";

const myTestArray = [1, 4, 3, 5, 2]
const resultArrayAsc = [1, 2, 3, 4, 5]
const resultArrayDesc = [5, 4, 3, 2, 1]
export const arrayOfStrings = ["peter", "sindy", "dimitri", "yehor", "hamza", "kashif", "elnaz"]
const resultArrayOfStringsAsc = ['dimitri', 'elnaz', 'hamza', 'kashif', 'peter', 'sindy', 'yehor']
const resultArrayOfStringDesc = ['yehor', 'sindy', 'peter', 'kashif', 'hamza', 'elnaz', 'dimitri']
describe("sortieren von einem Array", () => {
    test("sortiert array korrekt aufsteigend", () => {
        expect(sortArray(myTestArray)).toEqual(resultArrayAsc)
        expect(sortArray(arrayOfStrings)).toEqual(resultArrayOfStringsAsc)
    })

    test("sortiere array Korrekt absteigend", () => {

        expect(sortArray(myTestArray, "desc")).toEqual(resultArrayDesc)
        expect(sortArray(arrayOfStrings, "desc")).toEqual(resultArrayOfStringDesc)
    })
})