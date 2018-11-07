import {
  createStackNavigator,
} from 'react-navigation';
import SplashComponent from './SplashComponent';
import WordListComponent from './WordListComponent';

const Apps = createStackNavigator({
  Splash: { screen: SplashComponent },
  WordList: { screen: WordListComponent },
  Word: { screen: WordListComponent },
});

export default Apps;