import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BeforeListScreen extends Component<{}> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>before news list</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
});
