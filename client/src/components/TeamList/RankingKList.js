import React from "react";
import RankingKListHeader from "./RankingKList-Header"
import RankingKListPlayers from "./RankingKList-Players"

class RankingKList extends React.Component {
  renderPlayers() {
    const finalTopKickStats = [];
    const positionKickStatsOnly = this.props.allPlayersnfl.filter( i => {
      return i.position === this.props.markedPosition;
    });
    const topKickList = positionKickStatsOnly.sort(function (a, b) {
      return b.seasonPoints - a.seasonPoints;
    });
    const topKickStats = topKickList.slice(0, 10);

    for (let z = 0; z < topKickStats.length; z++) {
      let sortingPlayers = this.props.teamPlayers.find( i => {
        return i.name === topKickStats[z].name;
      })
      finalTopKickStats.push(sortingPlayers);
      finalTopKickStats[z].Pts = topKickStats[z].seasonPoints;
    }

    return finalTopKickStats.map((player, index) =>
      <RankingKListPlayers key={index}
        teamData={player}
      />
    );
  }

  render() {
    return (
      <table className="table table-inverse">
        <RankingKListHeader />
        <tbody>
          {this.renderPlayers()}
        </tbody>
      </table>
    );
  };
};

export default RankingKList;
