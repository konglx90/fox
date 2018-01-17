import { TabNavigator } from 'react-navigation';
import { NewsListScreen, BeforeListScreen } from '../screens';


const NewsNavigator = TabNavigator({
    NewsList: {
        screen: NewsListScreen,
    },
    Before: {
        screen: BeforeListScreen,
    },
});

export default NewsNavigator;
