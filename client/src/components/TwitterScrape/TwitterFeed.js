import axios from 'axios';
import Container from "../Container/Container";
import React, {Component} from 'react';
import "./TwitterFeed.css";

class TwitterFeedComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      tweets: [],
      analyst: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

handleClick = e => {
  e.preventDefault();
  this.setState({
    analyst: e.target.value
  });
  console.log(e.target.value);
  console.log(this.state);
  const analyst = e.target.value;
  axios.post('/twitterScrape', {
  analyst})
    .then(res => {
      this.setState({
        tweets: res.data
      });
    });

}

render () {
    return (
      <Container className='TwitterFeed'>
        <h4>YOUR FAVORITE FANTASY FEEDS</h4>
        <h5>Field Yates</h5>
        <button
          className="Tweets-button"
          name='yatesButton'
          value='FieldYates'
          onClick={(e) => this.handleClick(e)}
          >Get Tweets
        </button>
        <h5>Stephania Bell</h5>
        <button
          className="Tweets-button"
          name='bellButton'
          value='Stephania_ESPN'
          onClick={(e) => this.handleClick(e)}
          >Get Tweets
        </button>
        <h5>Adam Schefter</h5>
        <button
          className="Tweets-button"
          name='schefterButton'
          value='AdamSchefter'
          onClick={(e) => this.handleClick(e)}
          >Get Tweets
        </button>
        <ol>
            {
                this.state.tweets.map((tweet, index) => {
                  return <li key={index}>{ tweet.text }</li>;
                })
            }
        </ol>
      </Container>
    )
  }
}

export default TwitterFeedComponent
