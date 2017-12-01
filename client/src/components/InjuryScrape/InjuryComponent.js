import React, {Component} from 'react';
import Container from "../Container/Container";
import InjuriesList from "../TeamList/InjuriesList";
import { connect } from "react-redux";

class InjuryComponent extends React.Component {

  render () {
    console.log(this.props.playersInjuries)
    return (
      <Container className="injuries-table" >
        <div className='InjuryFeed'>
          <h4>CURRENT INJURIES FOR WEEK 9</h4>
          <InjuriesList
            injuredPlayers={this.props.playersInjuries}
          />
        </div>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    playersInjuries: state.playersInjuries
  }
};

export default connect(mapStateToProps)(InjuryComponent);
