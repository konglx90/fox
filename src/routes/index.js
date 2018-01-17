import { StackNavigator } from 'react-navigation';
import { AppScreen } from '../screens';
import NewsNavigator from './news-route';


const RootNavigator = StackNavigator({
  Home: {
    screen: AppScreen,
    navigationOptions: {
      headerTitle: '首页',
    },
  },
  NewsList: {
    screen: NewsNavigator,
    navigationOptions: {
      headerTitle: '今日日报',
    },
  },
});

export default RootNavigator;
