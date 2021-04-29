// Problem
// We need software to deliver the proper data to the scoreboard for a basketball team. Unfortunately the people using our software are not the brightest lights under the sun, so they need six buttons (each team can score either 1, 2 or 3 points with a single shot).

// Your Task
// Write a class ScoreKeeper which offers following methods:

// void scoreTeamA1()
// void scoreTeamA2()
// void scoreTeamA3()
// void scoreTeamB1()
// void scoreTeamB2()
// void scoreTeamB3()
// String getScore()

// Rules
// The returned String always has seven characters. An example would be 000:000

class ScoreKeeper {
  constructor() {
    this.teamA = 0;
    this.teamB = 0;
  }

  constructString() {}

  scoreTeamA1() {
    this.teamA = this.teamA + 1;
  }

  scoreTeamA2() {
    this.teamA = this.teamA + 2;
  }

  scoreTeamA3() {
    this.teamA = this.teamA + 3;
  }

  scoreTeamB1() {
    this.teamB = this.teamB + 1;
  }

  scoreTeamB2() {
    this.teamB = this.teamB + 2;
  }

  scoreTeamB3() {
    this.teamB = this.teamB + 3;
  }

  getScore() {
    var aScore = "";
    var bScore = "";
    if (this.teamA >= 100) aScore = this.teamA.toString();
    else if (this.teamA >= 10) aScore = "0" + this.teamA.toString();
    else aScore = "00" + this.teamA.toString();

    if (this.bScore >= 100) bScore = this.teamB.toString();
    else if (this.bScore >= 10) bScore = "0" + this.teamB.toString();
    else bScore = "00" + this.teamB.toString();

    return aScore + ":" + bScore;
  }
}

module.exports = ScoreKeeper;
