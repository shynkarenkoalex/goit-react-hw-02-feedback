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
        return Math.round(this.state.good/total*100);
    }
 

    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <h1>Please leave feedback</h1>
                <Button title='Good' onChangeStatistics={() => this.handleChangeStatistics('good')} />
                <Button title='Neutral' onChangeStatistics={() => this.handleChangeStatistics('neutral')} />
                <Button title='Bad' onChangeStatistics={() => this.handleChangeStatistics('bad')} />
                <h2>Statistics</h2>
                <ul>
                    <li>Good: <span>{good}</span></li>
                    <li>Neutral: <span>{neutral}</span></li>
                    <li>Bad: <span>{bad}</span></li>
                    <li>Total: <span>{total}</span></li>
                    {good > 0 && (<li>Positive Feedback: <span>{positivePercentage}%</span></li>)}                    
                </ul>         
            </div>
        )        
    }
}


