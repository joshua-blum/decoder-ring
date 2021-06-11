// Write your tests here!
const {caesar} = require("../src/caesar.js");
const {expect} = require("chai");

describe("#caesar", () => {
    //tests for properly returning false
    it("should return false if shift value is not present", () => {
        let actual = caesar("hello");
        expect(actual).to.be.false;
    });

    it("should return false if shift = 0", () => {
        let actual = caesar("hello", 0);
        expect(actual).to.be.false;
    });

    it("should return false if shift value is < -25", () => {
        let actual = caesar("hello", -26);
        expect(actual).to.be.false;
    });

    it("should return false if shift value is > +25", () => {
        let actual = caesar("hello", 26);
        expect(actual).to.be.false;
    });
    //end of tests for returning false

    it("should return a string", () => {
        let actual = caesar("croccodile", 4);
        expect(actual).to.be.a('string');
    });

    it("should wrap around the alphabet when necessary", () => {
        let actual = caesar("zebra", 1);
        let expected = "afcsb";
        expect(actual).to.equal(expected);
    });

});
