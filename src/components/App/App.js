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
          text: 'Which command creates a package.json file?',
          choices: [
            {
              id: 'a',
              text: 'npm create'
            },
            {
              id: 'b',
              text: 'npm package'
            },
            {
              id: 'c',
              text: 'npm new'
            },
            {
              id: 'd',
              text: 'npm init'
            }
          ],
          correct: 'd'
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

              text: 'value'
            },
            {
              id: 'd',
              text: 'Key'
            }
          ],
          correct: 'd'
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
        },
        {
          id: 5,
          text: 'By default, the webpack configuration file must be named what?',
          choices: [
            {
              id: 'a',
              text: 'config.js'
            },
            {
              id: 'b',
              text: 'webpack.config.js'
            },
            {
              id: 'c',
              text: 'webpack.conf.js'
            },
            {
              id: 'd',
              text: 'webpack-config.js'
            }
          ],
          correct: 'b'
        },
        {
          id: 6,
          text: 'What loader did we use with Webpack?',
          choices: [
            {
              id: 'a',
              text: 'webpack-loader'
            },
            {
              id: 'b',
              text: 'react-loader'
            },
            {
              id: 'c',
              text: 'babel-loader'
            },
            {
              id: 'd',
              text: 'jsx-loader'
            }
          ],
          correct: 'c'
        },
        {
          id: 7,
          text: 'With ES6 syntax, a component class must extend what class?',
          choices: [
            {
              id: 'a',
              text: 'React'
            },
            {
              id: 'b',
              text: 'Component'
            },
            {
              id: 'c',
              text: 'Master'
            },
            {
              id: 'd',
              text: 'Application'
            }
          ],
          correct: 'b'
        },
        {
          id: 8,
          text: 'When using ES6, states are set in a constructor',
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
          id: 9,
          text: 'Number of elements, a valid react component can return ',
          choices: [
            {
              id: 'a',
              text: '1'
            },
            {
              id: 'b',
              text: '2'
            },
            {
              id: 'c',
              text: '3'
            },
            {
              id: 'd',
              text: '4'
            }
          ],
          correct: 'a'
        },
        {
          id: 10,
          text: 'ReactJS uses _____ to increase performance',
          choices: [
            {
              id: 'a',
              text: 'Original DOM'
            },
            {
              id: 'b',

              text: 'Virtual DOM'
            },
            {
              id: 'c',
              text: 'Both of above'
            },
            {
              id: 'd',
              text: 'None of above'
            }
          ],
          correct: 'b'
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
