import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class WordItemAddComponent extends Component {
    constructor(props) {
        super(props);    
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.word}>
                <Text>+</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    word: {
        fontSize: 40,
        textAlign: 'center',
        padding: 20,
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    addbtn: {
        fontSize: 50,
    }
});