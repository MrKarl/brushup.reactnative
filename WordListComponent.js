import React, { Component } from 'react';
import { Alert, StatusBar, StyleSheet, Text, View, Button, ScrollView, FlatList, Dimensions } from 'react-native';
import WordItemComponent from './WordItemComponent';
import WordItemAddComponent from './WordItemAddComponent';
import { List, ListItem } from "react-native-elements";

export default class WordListComponent extends Component {
    constructor(props) {
        super(props);

        console.log("HELLO WordListComponent");
        console.log(this);

        this.state = {
            uid: 1,     // TODO: should be assigned by the props. maybe?
            loading: false,
            data: [{}],
            limit: 12,
            offset: 0,
            error: null,
            refreshing: false,
        };
    }


    _onPressEditButton() {
        Alert.alert('Edit창이 짠 떠야함!!!');
    }

    _onPressWordButton(item) {
        console.log(item);
        Alert.alert('Word Item이 짠 떠야함 !!!');
    }

    _fetchWords = () => {
        const url = `http://localhost:3000/api/v1/user/english?uid=${this.state.uid}&limit=${this.state.limit}&offset=${this.state.offset}`;
        console.log(`fetch url: ${url}`);

        this.setState({
            loading: true
        });
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({
                    data: [...this.state.data, ...res],
                    error: null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });

    }

    _handleRefresh = () => {
        this.setState({
            limit: 12,
            offset: 0,
            refreshing: true
        }, () => {
            this._fetchWords();
        });
    };

    _handleLoadMore = () => {
        this.setState({
            offset: this.state.offset + this.state.limit
        }, () => {
            this._fetchWords();
        });
    };

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this._fetchWords();
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    translucent={true}
                    backgroundColor="rgba(0, 0, 0, 0)"
                    barStyle="light-content" />
                <View style={styles.actionBar}>
                    <Text style={styles.numOfWords}>{this.state.data.length} 개</Text>
                    <Button
                        style={styles.editButton}
                        onPress={this._onPressEditButton}
                        title="Edit" />
                </View>

                <List style={styles.listView}>
                    <FlatList
                        data={this.state.data}
                        renderItem={
                            ({ item, index }) => {
                                if (index === 0) {
                                    return (<WordItemAddComponent />)
                                } else {
                                    return (<WordItemComponent 
                                        data={item}
                                        index={index}
                                        onPress={this._onPressWordButton.bind(this, item)} />
                                    )
                                }
                            }}
                        onRefresh={this.handleRefresh}
                        refreshing={this.state.refreshing}
                        onEndReached={this.handleLoadMore}
                        onEndReachedThreshold={24}
                    />
                </List>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    actionBar: {
        alignContent: 'stretch',
        paddingTop: 50,
        height: 100,
        backgroundColor: '#333333',
    },
    numOfWords: {
        textAlign: 'left',
        color: '#ffffff'
    },
    editButton: {
        textAlign: 'right',
        color: '#ffffff'
    },
    listView: {

    },
});