import React, { Component } from 'react';
import Button from './Button';

export default class Widget extends Component {
    static propTypes = {};

    static defaultProps = {};

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    handleChangeStatistics = (type) => {
        this.setState(
            preventState => ({[type]: preventState[type]+1})
        )
    }

    countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        return this.state.good/total;
    }
 

    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage()
        return (
            <div>
                <h1>Please leave feedback</h1>
                <Button title='Good' onChangeStatistics={() => this.handleChangeStatistics('good')} />
                <Button title='Neutral' onChangeStatistics={() => this.handleChangeStatistics('neutral')} />
                <Button title='Bad' onChangeStatistics={() => this.handleChangeStatistics('bad')} />
                <h2>Statistics</h2>
                <ul>
                    <li>Good: <span>{this.state.good}</span></li>
                    <li>Neutral: <span>{this.state.neutral}</span></li>
                    <li>Bad: <span>{this.state.bad}</span></li>
                    <li>Total: <span>{total}</span></li>
                    <li>Positive Feedback: <span>{positivePercentage}</span></li>
                </ul>         
            </div>
        )        
    }
}


