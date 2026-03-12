import { test, expect } from "vitest";
import { isEvenNumber } from "../helperFunctions/helper";

test("finde heraus, ob eingehende Zahl eine gerade Zahl ist",()=>{

    expect(isEvenNumber(10)).toBe(true)
    expect(isEvenNumber(9)).toBe(false)
    expect(isEvenNumber(-10)).toBe(true)
    expect(isEvenNumber(0)).toBe("no number")
    expect(isEvenNumber(2.5)).toBe(false)
    expect(isEvenNumber()).toBe("no number")
    expect(isEvenNumber("auto")).toBe("no number")
})