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


const ScoreKeeper = require("./ScoreKeeper");

describe("ScoreKeeper", () => {
    it('scoreTeamA1 should add 1 point to team A', () => {
        const ScoreKeeper1 = new ScoreKeeper;
        ScoreKeeper1.scoreTeamA1();
        expect(ScoreKeeper1.getScore()).toBe('001:000');
    });

    it('scoreTeamA2 should add 2 point to team A', () => {
        const ScoreKeeper1 = new ScoreKeeper;
        ScoreKeeper1.scoreTeamA2();
        expect(ScoreKeeper1.getScore()).toBe('002:000');
    });

    it('scoreTeamA3 should add 3 point to team A', () => {
        const ScoreKeeper1 = new ScoreKeeper;
        ScoreKeeper1.scoreTeamA3();
        expect(ScoreKeeper1.getScore()).toBe('003:000');
    });

    it('scoreTeamB1 should add 1 point to team B', () => {
        const ScoreKeeper1 = new ScoreKeeper;
        ScoreKeeper1.scoreTeamB1();
        expect(ScoreKeeper1.getScore()).toBe('000:001');
    });

    it('scoreTeamB2 should add 2 point to team B', () => {
        const ScoreKeeper1 = new ScoreKeeper;
        ScoreKeeper1.scoreTeamB2();
        expect(ScoreKeeper1.getScore()).toBe('000:002');
    });

    it('should add points from all buttons', () => {
        const ScoreKeeper2 = new ScoreKeeper;
        ScoreKeeper2.scoreTeamA1();
        ScoreKeeper2.scoreTeamA2();
        ScoreKeeper2.scoreTeamA3();
        ScoreKeeper2.scoreTeamB1();
        ScoreKeeper2.scoreTeamA3();
        ScoreKeeper2.scoreTeamA3();
        ScoreKeeper2.scoreTeamB2();
        ScoreKeeper2.scoreTeamB3();
        ScoreKeeper2.scoreTeamA3();
        ScoreKeeper2.scoreTeamB3();
        ScoreKeeper2.scoreTeamB3();
        
        expect(ScoreKeeper2.getScore()).toBe("015:012");
    });

});