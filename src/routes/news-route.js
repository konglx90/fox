import { TabNavigator } from 'react-navigation';
import { NewsListScreen, BeforeListScreen } from '../screens';


const NewsNavigator = TabNavigator({
  Home: {
    screen: BeforeListScreen,
  },
  NewsList: {
    screen: NewsListScreen,
  },
});

export default NewsNavigator;
