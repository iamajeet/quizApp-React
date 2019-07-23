import React, { Component } from 'react';
class Result extends Component {

    render() {
        var percent = (this.props.score / this.props.questions.length * 100);
        if (percent > 80) {
            var message = 'Awesome Job!';
        } else if (percent < 80 && percent > 60) {
            message = 'You Did Ok!';
        } else {
            message = 'You Did Horrible!';
        }
        return (
            <div className="text-center">
                <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
                <h1>{percent}% - {message}</h1>
                <hr />
                <a style={{ marginTop: "20px", marginBottom: "100px" }} className="btn btn-primary" role="button" href="/">Take Again</a>
            </div>

        );
    }
}

export default Result;