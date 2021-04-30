class ScoreKeeper {
    constructor() {
      this.frameCount = 0;
      this.spareBonus = 0;
      this.strikeBonus = 0;
      this.totalScore = 0;
      this.rollCount = 0;
      this.lastRollPins= 0;
    }

    roll (pins) {
      // handle framecount
      if (this.rollCount === 1 || pins === 10) {
        this.rollCount = 0;
        this.frameCount =  this.frameCount + 1;
      }

      // handle strike bonus
      // if ()


        
    }
    
    score () {
        return this.scoreTotal;
    }
  }
  
  module.exports = ScoreKeeper;
  