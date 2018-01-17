import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NewsListScreen extends Component<{}> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>news list</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
});
