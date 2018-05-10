var expect = require('chai').expect
var intersectionChecker = require("../lib/intersection-checker")


describe("Rectangle Test", () => {
  const myRectangle = {
    leftX: 1,
    bottomY: 1,
    width: 6,
    height: 3,
  }
  const theirRectangle = {
    leftX: 5,
    bottomY: 2,
    width: 3,
    hieght: 6
  }
  const myOtherRectangle = {
    leftX: 1,
    bottomY: 2,
    width: 6,
    height: 3,
  }
  const theirOtherRectangle = {
    leftX: 5,
    bottomY: 2,
    width: 3,
    hieght: 6
  }
  describe("instance methods", () => {
    describe("loveRectangle()", () => {
      it("should return new rectangle or square of intersection", () => {
        let ic = new intersectionChecker(myRectangle, theirRectangle)
        let loveRectangle = ic.loveRectangle()
        expect(loveRectangle.leftX).to.equal(5)
        expect(loveRectangle.bottomY).to.equal(2)
        expect(loveRectangle.width).to.equal(2)
        expect(loveRectangle.height).to.equal(2)
      })
      it("should return new rectangle or square of intersection", () => {
        let ic = new intersectionChecker(myOtherRectangle, theirOtherRectangle)
        let loveRectangle = ic.loveRectangle()
        expect(loveRectangle.leftX).to.equal(5)
        expect(loveRectangle.bottomY).to.equal(2)
        expect(loveRectangle.width).to.equal(2)
        expect(loveRectangle.height).to.equal(3)
      })
    })
    describe("coordsArray", () => {
      it("returns array of numbers starting from first argument", () => {
        let ic = new intersectionChecker(myRectangle, theirRectangle)
        let testArray = ic.coordsArray(3, 5)
        expect(testArray).to.be.a('array')
        expect(testArray.length).to.equal(5)
        expect(testArray[0]).to.equal(3)
      })
    })
  })
})
