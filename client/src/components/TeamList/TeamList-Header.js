import React from "react";

const TeamListHeader = props => {

  return (
    <thead>
      <tr>
        <th>PLAYER</th>
        <th>POSITION</th>
        <th>TEAM</th>
        <th>SEASON PTS</th>
        <th>SEASON PROJECTED PTS</th>
        <th>WEEK PROJECTED PTS</th>
        <th>ACTION</th>
      </tr>
    </thead>
  );
};

export default TeamListHeader;
