const validateValue = require('./validateValue')

describe("validateValue", () => {
    test("Корректное значение", () =>{
        expect(validateValue(50)).toBe(true);
    }),
    test("Меньше корректного", () =>{
        expect(validateValue(-5)).toBe(false);
    }),
    test("Больше корректного", () =>{
        expect(validateValue(110)).toBe(false);
    }),
    test("Нижняя граница", () =>{
        expect(validateValue(0)).toBe(true);
    }),
    test("Верхняя граница", () =>{
        expect(validateValue(100)).toBe(true);
    })
})