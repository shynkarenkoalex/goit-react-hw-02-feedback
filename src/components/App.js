import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Layout from './Layout';

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

  isFeedbackValue = () => this.state.good || this.state.neutral || this.state.bad;

  countPositiveFeedbackPercentage = () => {
      const total = this.countTotalFeedback();
      return Math.round(this.state.good/total*100);
  };
 

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const keys = Object.keys(this.state);
    const isFeedbackValue = isFeedbackValue();
    return (
      <Layout>
        <Section title = 'Statistics'>
          <FeedbackOptions options={keys} onLeaveFeedback={this.handleChangeStatistics}/>
        </Section>
        <Section title = 'Please leave feedback'>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
        </Section>
      </Layout>      
          
    )        
  }
}