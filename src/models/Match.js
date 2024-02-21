class Match {
  constructor(legue, homeTeam, awayTeam, currentTime) {
    this.legue = legue;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.currentTime = currentTime;
  }
}

class Team {
  constructor({ name, odds, score, empate }) {
    this.name = name;
    this.odds = odds;
    this.score = score;
    this.empate = empate;
  }
}

export { Match, Team };
