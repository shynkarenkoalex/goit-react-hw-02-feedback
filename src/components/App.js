import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Layout from "./Layout";
import Notification from "./Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleChangeStatistics = type => {
    this.setState(preventState => ({ [type]: preventState[type] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((sum, current) => sum + current, 0);

  countPositiveFeedbackPercentage = (totalValue, positivValue) =>
    Math.round((positivValue / totalValue) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const feedBackName = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      this.state.good
    );
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedBackName}
            onLeaveFeedback={this.handleChangeStatistics}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Layout>
    );
  }
}
