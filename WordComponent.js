import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

export default class WordComponent extends Component {
    constructor(props) {
        const word = props.word;
        this.state = {
            word: word
        }
    }

    _onPressCloseButton() {
        Alert.alert('뒤로가자 !');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.logo}>Brushup</Text>
                    <Button
                        style={styles.closeButton}
                        onPress={this._onPressCloseButton}
                        title="X" />
                </View>

                <View style={styles.content}>
                    <Text>{this.props.word.english}</Text>
                    <Text>{this.props.word.koreans}</Text>
                    <Text>{this.props.word.examples}</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {

    },
    logo: {

    },
    closeButton: {

    },
    content: {

    }
});