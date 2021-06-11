// Write your tests here!
const {polybius} = require("../src/polybius");
const {expect} = require("chai");

describe("#polybius", () => {
    it("should return false if there is an odd number of numbers for a decoding request", () => {
        const testString = "1214151";
        let actual = polybius(testString, false);
        expect(actual).to.be.false;
    });

    it("should return an encoded string of numbers if not given a second parameter", () => {
        const testString = "hello";
        let actual = polybius(testString);
        console.log(actual);
        let actualNumber = parseFloat(actual);
        expect(actualNumber).to.not.be.NaN;
    });

    it("should return a string of alphanumeric characters/spaces if given a string of numbers/spaces", () => {
        const testString = "3251131343 2543241341";
        const testStringKey = "hello world";
        let actual = polybius(testString, false);
        expect(actual).to.equal(testStringKey);
    });
});
