import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Button from './Button';

export default class App extends Component {

  state = {
      good: 0,
      neutral: 0,
      bad: 0
  };
    
  handleChangeStatistics = (type) => {
      this.setState(
          preventState => ({[type]: preventState[type]+1})
      )
  };

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
      const total = this.countTotalFeedback();
      return Math.round(this.state.good/total*100);
  };
 

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const keys = Object.keys(this.state);
    return (
      <div>
          <h1>Please leave feedback</h1>
          <FeedbackOptions options={keys} onLeaveFeedback={this.handleChangeStatistics}/>

          {/*{keys.map(key => (*/}
          {/*    <Button keys={key} title={key} onChangeStatistics={() => this.handleChangeStatistics({key})} />*/}
          {/*))}*/}

          {/*<Button title='Good' onChangeStatistics={() => this.handleChangeStatistics('good')} />*/}
          {/*<Button title='Neutral' onChangeStatistics={() => this.handleChangeStatistics('neutral')} />*/}
          {/*<Button title='Bad' onChangeStatistics={() => this.handleChangeStatistics('bad')} />*/}
          <h2>Statistics</h2>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>                    
      </div>
    )        
  }
}