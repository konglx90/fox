/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { getIOSVersion } from '../api/requestApi';
import { connect } from 'react-redux';

import { versionActions } from '../redux/version-redux';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class AppScreen extends Component<{}> {
    constructor(props) {
        super(props);
        getIOSVersion().then(res => {
            this.props.dispatch(versionActions.versionSuccess(res));
        });
    }
    render() {
        console.log(this.props.version, 'version');
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                  Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                  To get started, edit App.js!
                </Text>
                <Text style={styles.instructions}>
                  {instructions}
                </Text>
                <Button
                  onPress={() => this.props.navigation.navigate('NewsList')}
                  title="Go to news list"
                />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default connect(state => {
    return ({
        version: state.version.version,
    })
})(AppScreen);
