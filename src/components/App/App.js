import React, { Component } from 'react';
import './App.css';
import Layout from '../../container/Layout/Layout';
import QuestionList from '../../container/QuestionList/QuestionList';
import ScoreBox from '../../container/ScoreBox/ScoreBox';
import Result from '../../container/Result/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'Which of the following is used to pass all props to a component?',
          choices: [
            {
              id: 'a',
              text: '{this.props.all}'
            },
            {
              id: 'b',
              text: '{…this.props}'
            },
            {
              id: 'c',
              text: '{This.props…}'
            },
            {
              id: 'd',
              text: '{props}'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'When mapping data, what property should be unique?',
          choices: [
            {
              id: 'a',
              text: 'None'
            },
            {
              id: 'b',
              text: 'Id'
            },
            {
              id: 'c',
              text: 'Key'
            },
            {
              id: 'd',
              text: 'value'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'When using ES6, event functions ALWAYS need to have “.bind(this)” attached',
          choices: [
            {
              id: 'a',
              text: 'True'
            },
            {
              id: 'b',
              text: 'False'
            }
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: 'How can we grab the input value from an onChange event?',
          choices: [
            {
              id: 'a',
              text: 'e.value'
            },
            {
              id: 'b',
              text: 'e.input.value'
            },
            {
              id: 'c',
              text: 'e.target.value'
            },
            {
              id: 'd',
              text: 'e.change.value'
            }
          ],
          correct: 'c'
        }
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current) {
    this.setState({ current });
  }

  setScore(score) {
    this.setState({ score });
  }
  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = '';
      var result = <Result {...this.state} />
    } else {
      scorebox = <ScoreBox {...this.state} />
      result = '';
    }
    return (

      <div >
        <Layout>
          {scorebox}
          <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
          {result}
        </Layout>
      </div >
    );
  }
}

export default App;
