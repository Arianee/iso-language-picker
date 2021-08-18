import {cleanLanguages} from "./cleanLanguages";

describe('clean language', () => {
    test('with only valid value', () => {
        const expectedValue=["en","en-us"];
        const result = cleanLanguages(["en", "en-us"]);
        expect(result).toEqual(expectedValue);
    })
    test('should remove null ', () => {
        const expectedValue=["en","en-us"];
        const result = cleanLanguages(["en",null, "en-us"]);
        expect(result).toEqual(expectedValue);
    })
    test('should remove undefined ', () => {
        const expectedValue=["en","en-us"];
        const result = cleanLanguages(["en",undefined, "en-us"]);
        expect(result).toEqual(expectedValue);
    })
    test('should remove not well formatted language ', () => {
        const expectedValue=["en","en-us"];
        const result = cleanLanguages(["en",'a', "en-us"]);
        expect(result).toEqual(expectedValue);
    })
});
