import React from "react";
import Container from "../Container/Container";
import RankingList from "../TeamList/RankingList";
import RankingKList from "../TeamList/RankingKList";
import RankingSBList from "../TeamList/RankingSBList";
import { connect } from "react-redux";
import "./PlayerRankings.css";

class PlayerRankings extends React.Component {

  render(){
    return(
      <Container>
        <div id="position-rankings" >
          <div className="rankings-table" >
            <div>
              <h4>QUATERBACK</h4>
              <RankingList
                teamPlayers={this.props.QBFeedStats}
                allPlayersnfl={this.props.playersStats}
                markedPosition={this.props.QBFeedStats[0].position}
              />
            </div>
          </div>
          <div className="rankings-table" >
            <div>
              <h4>RUNNING BACK</h4>
              <RankingList
                teamPlayers={this.props.RBFeedStats}
                allPlayersnfl={this.props.playersStats}
                markedPosition={this.props.RBFeedStats[0].position}
              />
            </div>
          </div>
          <div className="rankings-table" >
            <div>
              <h4>WIDE RECEIVER</h4>
              <RankingList
                teamPlayers={this.props.WRFeedStats}
                allPlayersnfl={this.props.playersStats}
                markedPosition={this.props.WRFeedStats[0].position}
              />
            </div>
          </div>
          <div className="rankings-table" >
            <div>
              <h4>TIGHT END</h4>
              <RankingList
                teamPlayers={this.props.TEFeedStats}
                allPlayersnfl={this.props.playersStats}
                markedPosition={this.props.TEFeedStats[0].position}
              />
            </div>
          </div>
          <div className="rankings-table" >
            <div>
              <h4>KICKERS</h4>
              <RankingKList
                teamPlayers={this.props.KFeedStats}
              />
            </div>
          </div>

        </div>
        <div id="myTeam-data">
          <div className="rankings-table" >
            <div>
            <h4>STARTER PLAYERS</h4>
              <RankingSBList
                teamPlayers={this.props.starterPlayers}
              />
            </div>
            <div>
              <h4>BENCH PLAYERS</h4>
              <RankingSBList
                teamPlayers={this.props.benchPlayers}
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
};

function mapStateToProps(state) {
  return {
    playerSearch: state.playerSearch,
    playersNames: state.playersNames,
    playersStats: state.playersStats,
    QBFeedStats: state.QBFeedStats,
    RBFeedStats: state.RBFeedStats,
    WRFeedStats: state.WRFeedStats,
    TEFeedStats: state.TEFeedStats,
    KFeedStats: state.KFeedStats,
    starterPlayers: state.starterPlayers,
    benchPlayers: state.benchPlayers,
    payloadContainer: state.payloadContainer
  }
};

export default connect(mapStateToProps)(PlayerRankings);
