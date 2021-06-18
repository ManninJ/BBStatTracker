import './App.css';
import React from 'react';

import Title from '../Title/Title';
import Points from '../Points/Points';
import Assists from '../Assists/Assists';
import Rebounds from '../Rebounds/Rebounds';
import Steals from '../Steals/Steals';
import Blocks from '../Blocks/Blocks';
import Turnovers from '../Turnovers/Turnovers';
import Fouls from '../Fouls/Fouls';
import Save from '../Save/Save';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        teamName: '',
        playerName: '',
        totalPoints: 0,
        fieldGoalsMade: 0,
        fieldGoalsMissed: 0,
        fieldGoalsAttempted: 0,
        fieldGoalPercent: 0,
        threePointsMade: 0,
        threePointsMissed: 0,
        threePointsAttempted: 0,
        threePointPercent: 0,
        freeThrowsMade: 0,
        freeThrowsMissed: 0,
        freeThrowsAttempted: 0,
        freeThrowPercent: 0,
        totalAssists: 0,
        totalRebounds: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        totalSteals: 0,
        totalBlocks: 0,
        totalFouls: 0,
        totalTurnovers: 0
    }

    this.handleTeamNameChange = this.handleTeamNameChange.bind(this);
    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);

    this.madeFieldGoalIsTwo = this.madeFieldGoalIsTwo.bind(this);
    this.missedFieldGoalIsTwo = this.missedFieldGoalIsTwo.bind(this);
    this.madeThreeButton = this.madeThreeButton.bind(this);
    this.missedThreeButton = this.missedThreeButton.bind(this);
    this.madeFreeThrowButton = this.madeFreeThrowButton.bind(this);
    this.missedFreeThrowButton = this.missedFreeThrowButton.bind(this);

    this.decrementFGMadeIsTwo = this.decrementFGMadeIsTwo.bind(this);
    this.decrementFGMissedIsTwo = this.decrementFGMissedIsTwo.bind(this);
    this.decrement3PMade = this.decrement3PMade.bind(this);
    this.decrement3PMissed = this.decrement3PMissed.bind(this);
    this.decrementFTMade = this.decrementFTMade.bind(this);
    this.decrementFTMissed = this.decrementFTMissed.bind(this);

    this.calculateFieldGoalPercent = this.calculateFieldGoalPercent.bind(this);
    this.calculateThreePointPercentage = this.calculateThreePointPercentage.bind(this);
    this.calculateFreeThrowPercent = this.calculateFreeThrowPercent.bind(this);

    this.incrementAssists = this.incrementAssists.bind(this);
    this.decrementAssists = this.decrementAssists.bind(this);

    this.incrementOffensiveRebounds = this.incrementOffensiveRebounds.bind(this);
    this.incrementDefensiveRebounds = this.incrementDefensiveRebounds.bind(this);
    this.decrementOffensiveRebounds = this.decrementOffensiveRebounds.bind(this);
    this.decrementDefensiveRebounds = this.decrementDefensiveRebounds.bind(this);

    this.incrementSteals = this.incrementSteals.bind(this);
    this.decrementSteals = this.decrementSteals.bind(this);

    this.incrementBlocks = this.incrementBlocks.bind(this);
    this.decrementBlocks = this.decrementBlocks.bind(this);

    this.incrementFouls = this.incrementFouls.bind(this);
    this.decrementFouls = this.decrementFouls.bind(this);

    this.incrementTurnovers = this.incrementTurnovers.bind(this);
    this.decrementTurnovers = this.decrementTurnovers.bind(this);

    this.resetValues = this.resetValues.bind(this);
  }

  handleTeamNameChange(e) {
    this.setState({teamName: e.target.value});
  }

  handlePlayerNameChange(e) {
    this.setState({playerName: e.target.value});
  }

  madeFieldGoalIsTwo() {
    this.setState({ fieldGoalsMade: this.state.fieldGoalsMade + 1  });
    this.setState({ fieldGoalsAttempted: this.state.fieldGoalsAttempted + 1 });
    this.setState({ totalPoints: this.state.totalPoints + 2 });

    this.calculateFieldGoalPercent();
  }

  missedFieldGoalIsTwo() {
    this.setState({ fieldGoalsMissed: this.state.fieldGoalsMissed + 1 });
    this.setState({ fieldGoalsAttempted: this.state.fieldGoalsAttempted + 1 });

    this.calculateFieldGoalPercent();
  }

  madeThreeButton() {
    this.setState({ threePointsMade: this.state.threePointsMade + 1 });
    this.setState({ fieldGoalsMade: this.state.fieldGoalsMade + 1  });

    this.setState({ fieldGoalsAttempted: this.state.fieldGoalsAttempted + 1 });
    this.setState({ threePointsAttempted: this.state.threePointsAttempted + 1 });
    this.setState({ totalPoints: this.state.totalPoints + 3 });

    this.calculateFieldGoalPercent();
    this.calculateThreePointPercentage();
  }

  missedThreeButton() {
    this.setState({ threePointsMissed: this.state.threePointsMissed + 1 });
    this.setState({ fieldGoalsMissed: this.state.fieldGoalsMissed + 1 });

    this.setState({ fieldGoalsAttempted: this.state.fieldGoalsAttempted + 1 });
    this.setState({ threePointsAttempted: this.state.threePointsAttempted + 1 });

    this.calculateFieldGoalPercent();
    this.calculateThreePointPercentage();
  }

  madeFreeThrowButton() {
    this.setState({ freeThrowsMade: this.state.freeThrowsMade + 1 });

    this.setState({ freeThrowsAttempted: this.state.freeThrowsAttempted + 1 });
    this.setState({ totalPoints: this.state.totalPoints + 1 });

    this.calculateFreeThrowPercent();
  }

  missedFreeThrowButton() {
    this.setState({ freeThrowsMissed: this.state.freeThrowsMissed + 1 });
    this.setState({ freeThrowsAttempted: this.state.freeThrowsAttempted + 1 });

    this.calculateFreeThrowPercent();
  }

  decrementFGMadeIsTwo() {
    if (this.state.fieldGoalsMade > 0 && this.state.fieldGoalsAttempted > 0 && this.state.fieldGoalsMade > this.state.threePointsMade) {
        this.setState({ fieldGoalsMade: this.state.fieldGoalsMade - 1  });

        this.setState({ fieldGoalsAttempted: this.state.fieldGoalsAttempted - 1 });
        this.setState({ totalPoints: this.state.totalPoints - 2 });

        this.calculateFieldGoalPercent();
    }
  }

  decrementFGMissedIsTwo() {
    if (this.state.fieldGoalsMissed > 0 && this.state.fieldGoalsAttempted > 0 && 
        this.state.fieldGoalsMissed > this.state.threePointsMissed && this.state.fieldGoalsAttempted > this.state.fieldGoalsMade) {
        this.setState({ fieldGoalsMissed: this.state.fieldGoalsMissed - 1 });

        this.setState({ fieldGoalsAttempted: this.state.fieldGoalsAttempted - 1 });

        this.calculateFieldGoalPercent();
    }
  }

  decrement3PMade() {
    if (this.state.threePointsMade > 0 && this.state.threePointsAttempted > 0) {
        this.setState({ threePointsMade: this.state.threePointsMade - 1 });
        this.setState({ fieldGoalsMade: this.state.fieldGoalsMade - 1  });

        this.setState({ fieldGoalsAttempted: this.state.fieldGoalsAttempted - 1 });
        this.setState({ threePointsAttempted: this.state.threePointsAttempted - 1 });
        this.setState({ totalPoints: this.state.totalPoints - 3 });

        this.calculateFieldGoalPercent();
        this.calculateThreePointPercentage();
    }
  }

  decrement3PMissed() {
    if (this.state.threePointsMissed > 0 && this.state.threePointsAttempted > 0) {
        this.setState({ threePointsMissed: this.state.threePointsMissed - 1 });
        this.setState({ fieldGoalsMissed: this.state.fieldGoalsMissed - 1 });

        this.setState({ fieldGoalsAttempted: this.state.fieldGoalsAttempted - 1 });
        this.setState({ threePointsAttempted: this.state.threePointsAttempted - 1 });

        this.calculateFieldGoalPercent();
        this.calculateThreePointPercentage();
    }
  }

  decrementFTMade() {
    if (this.state.freeThrowsMade > 0 && this.state.freeThrowsAttempted > 0) {
        this.setState({ freeThrowsMade: this.state.freeThrowsMade - 1 });
        this.setState({ freeThrowsAttempted: this.state.freeThrowsAttempted - 1 });
        this.setState({ totalPoints: this.state.totalPoints - 1 });

        this.calculateFreeThrowPercent();
    }
  }

  decrementFTMissed() {
    if (this.state.freeThrowsMissed > 0 && this.state.freeThrowsAttempted > 0) {
        this.setState({ freeThrowsMissed: this.state.freeThrowsMissed - 1 });
        this.setState({ freeThrowsAttempted: this.state.freeThrowsAttempted - 1 });

        this.calculateFreeThrowPercent();
    }
  }

  calculateFieldGoalPercent() {
    this.setState(state => {
        const fieldGoalPercent = ((state.fieldGoalsMade / state.fieldGoalsAttempted) * 100).toFixed(2);

        if (!isNaN(fieldGoalPercent) && fieldGoalPercent !== Infinity) {
            return {
                fieldGoalPercent
            };
        } else {
            return {
                fieldGoalPercent: 0
            };
        }
    });
  }

  calculateThreePointPercentage() {
    this.setState(state => {
        const threePointPercent = ((state.threePointsMade / state.threePointsAttempted) * 100).toFixed(2);

        if (!isNaN(threePointPercent) && threePointPercent !== Infinity) {
            return {
                threePointPercent
            };
        } else {
            return {
                threePointPercent: 0
            };
        }
    });
  }

  calculateFreeThrowPercent() {
    this.setState(state => {
        const freeThrowPercent = ((state.freeThrowsMade / state.freeThrowsAttempted) * 100).toFixed(2);

        if (!isNaN(freeThrowPercent) && freeThrowPercent !== Infinity) {
            return {
                freeThrowPercent
            };
        } else {
            return {
                freeThrowPercent: 0
            };
        }
    });
  }

  incrementAssists() {
    this.setState({ totalAssists: this.state.totalAssists + 1 });
  }

  decrementAssists() {
    if (this.state.totalAssists > 0) {
      this.setState({ totalAssists: this.state.totalAssists - 1 });
    }
  }

  incrementOffensiveRebounds() {
    this.setState({ offensiveRebounds: this.state.offensiveRebounds + 1 });
    this.setState({ totalRebounds: this.state.totalRebounds + 1 });
  }

  decrementOffensiveRebounds() {
    if (this.state.offensiveRebounds > 0 && this.state.totalRebounds > 0) {
      this.setState({ offensiveRebounds: this.state.offensiveRebounds - 1 });
      this.setState({ totalRebounds: this.state.totalRebounds - 1 });
    }
  }

  incrementDefensiveRebounds() {
    this.setState({ defensiveRebounds: this.state.defensiveRebounds + 1 });
    this.setState({ totalRebounds: this.state.totalRebounds + 1 });
  }

  decrementDefensiveRebounds() {
    if (this.state.defensiveRebounds > 0 && this.state.totalRebounds > 0) {
      this.setState({ defensiveRebounds: this.state.defensiveRebounds - 1 });
      this.setState({ totalRebounds: this.state.totalRebounds - 1 });
    }
  }

  incrementSteals() {
    this.setState({ totalSteals: this.state.totalSteals + 1 });
  }

  decrementSteals() {
    if (this.state.totalSteals > 0) {
      this.setState({ totalSteals: this.state.totalSteals - 1 });
    }
  }

  incrementBlocks() {
    this.setState({ totalBlocks: this.state.totalBlocks + 1 });
  }

  decrementBlocks() {
    if (this.state.totalBlocks > 0) {
      this.setState({ totalBlocks: this.state.totalBlocks - 1 });
    }
  }

  incrementFouls() {
    this.setState({ totalFouls: this.state.totalFouls + 1 });
  }

  decrementFouls() {
    if (this.state.totalFouls > 0) {
      this.setState({ totalFouls: this.state.totalFouls - 1 });
    }
  }

  incrementTurnovers() {
    this.setState({ totalTurnovers: this.state.totalTurnovers + 1 });
  }

  decrementTurnovers() {
    if (this.state.totalTurnovers > 0) {
      this.setState({ totalTurnovers: this.state.totalTurnovers - 1 });
    }
  }

  resetValues() {
        this.setState({ teamName: '' });
        this.setState({ playerName: '' });
        this.setState({ totalPoints: 0 });
        this.setState({ fieldGoalsMade: 0 });
        this.setState({ fieldGoalsMissed: 0 });
        this.setState({ fieldGoalsAttempted: 0 });
        this.setState({ fieldGoalPercent: 0 });
        this.setState({ threePointsMade: 0 });
        this.setState({ threePointsMissed: 0 });
        this.setState({ threePointsAttempted: 0 });
        this.setState({ threePointPercent: 0 });
        this.setState({ freeThrowsMade: 0 });
        this.setState({ freeThrowsMissed: 0 });
        this.setState({ freeThrowsAttempted: 0 });
        this.setState({ freeThrowPercent: 0 });
        this.setState({ totalAssists: 0 });
        this.setState({ totalRebounds: 0 });
        this.setState({ offensiveRebounds: 0 });
        this.setState({ defensiveRebounds: 0 });
        this.setState({ totalSteals: 0 });
        this.setState({ totalBlocks: 0 });
        this.setState({ totalFouls: 0 });
        this.setState({ totalTurnovers: 0 });
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">BB</span>StatTracker</h1>
        <div className="App">
          <Title teamName={this.state.teamName}
                  playerName={this.state.playerName}
                  handleTeamNameChange={this.handleTeamNameChange}
                  handlePlayerNameChange={this.handlePlayerNameChange} />
          <div className="App-stats">
              <Points totalPoints={this.state.totalPoints}
                      fieldGoalsMade={this.state.fieldGoalsMade}
                      fieldGoalsMissed={this.state.fieldGoalsMissed}
                      fieldGoalsAttempted={this.state.fieldGoalsAttempted}
                      fieldGoalPercent={this.state.fieldGoalPercent}
                      threePointsMade={this.state.threePointsMade}
                      threePointsMissed={this.state.threePointsMissed}
                      threePointsAttempted={this.state.threePointsAttempted}
                      threePointPercent={this.state.threePointPercent}
                      freeThrowsMade={this.state.freeThrowsMade}
                      freeThrowsMissed={this.state.freeThrowsMissed}
                      freeThrowsAttempted={this.state.freeThrowsAttempted}
                      freeThrowPercent={this.state.freeThrowPercent} 
                      madeFieldGoalIsTwo={this.madeFieldGoalIsTwo}
                      missedFieldGoalIsTwo={this.missedFieldGoalIsTwo}
                      madeThreeButton={this.madeThreeButton}
                      missedThreeButton={this.missedThreeButton}
                      madeFreeThrowButton={this.madeFreeThrowButton}
                      missedFreeThrowButton={this.missedFreeThrowButton}
                      decrementFGMadeIsTwo={this.decrementFGMadeIsTwo}
                      decrementFGMissedIsTwo={this.decrementFGMissedIsTwo}
                      decrement3PMade={this.decrement3PMade}
                      decrement3PMissed={this.decrement3PMissed}
                      decrementFTMade={this.decrementFTMade}
                      decrementFTMissed={this.decrementFTMissed}
                      calculateFieldGoalPercent={this.calculateFieldGoalPercent}
                      calculateThreePointPercentage={this.calculateThreePointPercentage}
                      calculateFreeThrowPercent={this.calculateThreePointPercentage} />
              <Rebounds totalRebounds={this.state.totalRebounds}
                        offensiveRebounds={this.state.offensiveRebounds}
                        defensiveRebounds={this.state.defensiveRebounds}
                        incrementOffensiveRebounds={this.incrementOffensiveRebounds}
                        incrementDefensiveRebounds={this.incrementDefensiveRebounds}
                        decrementOffensiveRebounds={this.decrementOffensiveRebounds}
                        decrementDefensiveRebounds={this.decrementDefensiveRebounds} />
              <Assists totalAssists={this.state.totalAssists}
                        incrementAssists={this.incrementAssists}
                        decrementAssists={this.decrementAssists} />
              <Steals totalSteals={this.state.totalSteals}
                      incrementSteals={this.incrementSteals}
                      decrementSteals={this.decrementSteals} />
              <Blocks totalBlocks={this.state.totalBlocks}
                      incrementBlocks={this.incrementBlocks}
                      decrementBlocks={this.decrementBlocks} />
              <Turnovers totalTurnovers={this.state.totalTurnovers}
                        incrementTurnovers={this.incrementTurnovers}
                        decrementTurnovers={this.decrementTurnovers} />
              <Fouls totalFouls={this.state.totalFouls}
                    incrementFouls={this.incrementFouls}
                    decrementFouls={this.decrementFouls} />
              <Save teamName={this.state.teamName}
                    playerName={this.state.playerName}
                    totalPoints={this.state.totalPoints}
                    fieldGoalsMade={this.state.fieldGoalsMade}
                    fieldGoalsMissed={this.state.fieldGoalsMissed}
                    fieldGoalsAttempted={this.state.fieldGoalsAttempted}
                    fieldGoalPercent={this.state.fieldGoalPercent}
                    threePointsMade={this.state.threePointsMade}
                    threePointsMissed={this.state.threePointsMissed}
                    threePointsAttempted={this.state.threePointsAttempted}
                    threePointPercent={this.state.threePointPercent}
                    freeThrowsMade={this.state.freeThrowsMade}
                    freeThrowsMissed={this.state.freeThrowsMissed}
                    freeThrowsAttempted={this.state.freeThrowsAttempted}
                    freeThrowPercent={this.state.freeThrowPercent}
                    totalAssists={this.state.totalAssists}
                    totalRebounds={this.state.totalRebounds}
                    offensiveRebounds={this.state.offensiveRebounds}
                    defensiveRebounds={this.state.defensiveRebounds}
                    totalSteals={this.state.totalSteals}
                    totalBlocks={this.state.totalBlocks}
                    totalFouls={this.state.totalFouls}
                    totalTurnovers={this.state.totalTurnovers} />
              <div className="Reset">
                <button className="ResetButton" onClick={this.resetValues}>RESET</button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
