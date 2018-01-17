/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

export default class kButton extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
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
  }
});
