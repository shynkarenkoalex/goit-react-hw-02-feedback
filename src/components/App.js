import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

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
          <Section title = 'Statistics' header = 'Please leave feedback'>
            <FeedbackOptions options={keys} onLeaveFeedback={this.handleChangeStatistics}/>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
          </Section>
    )        
  }
}