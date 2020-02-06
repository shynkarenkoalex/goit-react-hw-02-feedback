import React, { Comment, Component } from 'react';

export default class Widget extends Component {
    static propTypes = {};

    static defaultProps = {};

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <button type='button' onClick = {(e) => {console.log(e.target)}}>Good</button> 
                <button type='button'>Neutral</button>
                <button type='button'>Bad</button> 
                <h2>Statistics</h2>
                <ul>
                    <li>Good:</li>
                    <li>Neutral:</li>
                    <li>Bad:</li>
                </ul>         
            </div>
        )        
    }
}


