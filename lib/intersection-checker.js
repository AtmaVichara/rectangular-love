module.exports = class intersectionChecker {

  constructor(myRectangle, theirRectangle) {
    this.rect1 = myRectangle
    this.rect2 = theirRectangle
  }

   loveRectangle() {
     let myRectXCoords = this.coordsArray(this.rect1.leftX, this.rect1.width)
     let myRectYCoords = this.coordsArray(this.rect1.bottomY, this.rect1.height)
     let theirRectXCoords = this.coordsArray(this.rect2.leftX, this.rect1.width)
     let theirRectYCoords = this.coordsArray(this.rect2.bottomY, this.rect1.height)
     let loveXCoords = this.overlappingCoords(myRectXCoords, theirRectXCoords)
     let loveYCoords = this.overlappingCoords(myRectYCoords, theirRectYCoords)
     let loveRectangle = {
       leftX: loveXCoords[0],
       bottomY: loveYCoords[0],
       width: loveXCoords.length,
       height: loveYCoords.length
     }
     return loveRectangle
   }

   coordsArray(position, cells) {
     return Array.from(new Array(cells), (x, i) => i + position)
   }

   overlappingCoords(myCoords, theirCoords) {
     return myCoords.filter((e) => {
       return theirCoords.includes(e)
     })
   }


}
