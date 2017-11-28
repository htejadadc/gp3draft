import React from "react";

class TeamListPlayers extends React.Component {

  renderPlayersList() {
    const playersStatsList = [
      this.props.teamData.name,
      this.props.teamData.position,
      this.props.teamData.teamName,
      this.props.teamData.teamAbbr,
      (this.props.teamData.seasonPoints).toFixed(2)
    ];

    return(
      playersStatsList.map((player, index) => (
        <td key={index} >{player}</td>
      ))
    );
  }

  renderEditOptions() {
    return(
      <td>
        <button onClick={this.props.deletePlayer}>Delete</button>
      </td>
    );
  }

  render() {
    return(
      <tr>
        {this.renderPlayersList()}
        {this.renderEditOptions()}
      </tr>
    );
  }
}

export default TeamListPlayers;
