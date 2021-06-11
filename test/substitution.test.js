// Write your tests here
const {substitution} = require("../src/substitution");
const {expect} = require("chai");

describe("#substitution", () => {
    it("should return false if there is an alphabet parameter that is not exactly 26 characters long", () => {
        const testString = "abcdefg";
        const actual = substitution("hello", testString);
        expect(actual).to.be.false;
    })

    it("should return false if the alphabet parameter does not consist of entirely unique values", () => {
        const testString = "abcbabcbabcbabcdefgetrfgtf";
        const actual = substitution("hello", testString);
        expect(actual).to.be.false;
    })

   it("should return false if missing the substitution alphabet", () => {
        const actual = substitution("hello");
        expect(actual).to.be.false;
   })
})