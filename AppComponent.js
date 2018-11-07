import React, { Component } from 'react';
import WordListComponent from './WordListComponent';
import SplashComponent from './SplashComponent';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSplashFinished: false
    };
    setInterval(() => {
      this.setState(prevState => {
        prevState.isSplashFinished = true;
        return prevState;
      })
    }, 2000);
  }

  render() {
    if (this.state.isSplashFinished) {
      return (
        <WordListComponent />
      );
    } else {
      return (
        <SplashComponent />
      );
    }
  }
}
