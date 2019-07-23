import React, { Component } from 'react';
class Jumbotron extends Component {

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">React quiz</h1>
                <p className="lead">This is a simple quiz to test the basics of React.js.</p>
                <hr className="my-4" />
                <p>Answer the folowing questions and check your result.</p>
                <a className="btn btn-primary btn-lg" target="_blank" href="http://www.reactjs.org" role="button">Learn more</a>
            </div>

        );
    }
}

export default Jumbotron;