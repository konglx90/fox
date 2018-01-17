import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { getLastestNews } from '../../api/requestApi';
import { connect } from 'react-redux';
import { newsActions } from '../../redux/news-redux';

class NewsListScreen extends Component<{}> {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        getLastestNews().then(res => {
            this.props.dispatch(newsActions.getNewsSuccess(res.stories));
        })
    }
    handlePress = (index) => {
        this.props.dispatch(newsActions.deleteOneNews(index));
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>news list</Text>
                {
                    this.props.news.map((n, index) => {
                        return (
                            <TouchableWithoutFeedback key={n.id} onPress={() => this.handlePress(index)}>
                                <View style={{padding: 14}}>
                                    <Text>{n.title}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
});

export default connect(state => {
    return ({
        news: state.news.news,
    })
})(NewsListScreen);
