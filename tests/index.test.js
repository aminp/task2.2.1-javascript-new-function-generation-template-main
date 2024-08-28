const { groupAnagrams } = require("../src");
const { toTitleCase } = require("../src");
const { sumOfPrimes } = require("../src");


describe('Testing the groupAnagrams function', () => {
    it('should correctly group anagrams together', () => {
        const testData = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const expectedOutput = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
        let result = groupAnagrams(testData);
        for(let i = 0; i < result.length; i++){
            result[i].sort();
        }
        result.sort();

        for(let i = 0; i < expectedOutput.length; i++){
            expectedOutput[i].sort();
        }
        expectedOutput.sort();
        expect(result).toEqual(expectedOutput);
    });
});

describe("sumOfPrimes", () => {
    test("returns the sum of all prime numbers up to a given number", () => {
        expect(sumOfPrimes(0)).toBe(0);
        expect(sumOfPrimes(1)).toBe(0);
        expect(sumOfPrimes(2)).toBe(2);
        expect(sumOfPrimes(5)).toBe(10);
        expect(sumOfPrimes(10)).toBe(17);
        expect(sumOfPrimes(30)).toBe(129);
    });

    test("returns 0 for negative input values", () => {
        expect(sumOfPrimes(-5)).toBe(0);
    });
});

describe("toTitleCase", () => {
    test("converts a string to title case (first letter of each word capitalized)", () => {
        expect(toTitleCase("hello world")).toBe("Hello World");
        expect(toTitleCase("john doe")).toBe("John Doe");
        expect(toTitleCase("test case one")).toBe("Test Case One");
        expect(toTitleCase("multiple     spaces")).toBe("Multiple     Spaces");
    });

    test("handles empty strings and strings with only spaces", () => {
        expect(toTitleCase("")).toBe("");
        expect(toTitleCase(" ")).toBe(" ");
        expect(toTitleCase("    ")).toBe("    ");
    });
});



