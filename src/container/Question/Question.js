import React, { Component } from 'react';

class Question extends Component {

    onChangeRadio(e) {
        console.log(e);
        e.preventDefault();
        const { setCurrent, setScore, question } = this.props;
        let selected = e.target.value;
        if (selected === question.correct) {
            setScore(this.props.score + 1);
        }
        setCurrent(this.props.current + 1);
    }
    render() {
        const { question } = this.props;
        return (
            <div style={{ marginBottom: "50px" }} className="well">
                <div className="card">
                    <div className="card-body">
                        <h4>{question.text}</h4>
                    </div>
                    <ul className="list-group">
                        {
                            this.props.question.choices.map(choice => {
                                return (
                                    <li className="list-group-item" key={choice.id}>
                                        {choice.id}
                                        <input style={{ margin: "10px" }} type="radio" onChange={this.onChangeRadio.bind(this)} name={question.id} value={choice.id} ></input>
                                        {choice.text}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Question;

//<li>{question.choices}</li>