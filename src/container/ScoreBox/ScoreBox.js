import React, { Component } from 'react';
class ScoreBox extends Component {

    render() {
        return (
            <div style={{ marginBottom: "20px" }} className="text-center">
                Question {this.props.current} out of {this.props.questions.length} <span className="pull-right"><strong>Score: {this.props.score}</strong></span>
            </div>
        );
    }
}

export default ScoreBox;