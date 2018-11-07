import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class WordItemComponent extends Component {
    constructor(props) {
        super(props);    
    }

    render() {
        console.log(this.props.data);
        console.log(this.props.index);
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.word}>
                <Text style={styles.english}>{this.props.data.english}</Text>
                <Text style={styles.koreans}>{this.props.data.koreans}</Text>
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
    english: {
        color: '#333333',
        fontSize: 20,
        textAlign: 'left',
        margin: 20,
    },
    koreans: {
        color: '#333333',
        fontSize: 15,
        textAlign: 'left',
        margin: 20,
    },
});