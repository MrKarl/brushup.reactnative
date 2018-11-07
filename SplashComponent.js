import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WordListComponent from './WordListComponent';

export default class SplashComponent extends Component {
  constructor(props) {
        super(props);
    // this.state = {
    //   isSplashFinished: false
    // };
    // setInterval(() => {
    //   this.setState(prevState => {
    //     prevState.isSplashFinished = true;
    //     return prevState;
    //   })
    // }, 2000);
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Brushup</Text>
            <Text style={styles.subText}>영어 고수가 되는 방법</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
  },
  subText: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});