import { expect, test, describe } from "vitest";
import { countStringLength } from "../helperFunctions/countStringLength";


describe("testet die function zur berechnung der länge von strings", () => {

    test("soll nur valide daten zurück kommen", () => {
        expect(countStringLength("peter")).toBe(5)
    })
    test("soll nur invalide resultate geben", () => {
        expect(countStringLength()).toBe("invalid string")
        expect(countStringLength(12)).toBe("invalid string")
    })
})



