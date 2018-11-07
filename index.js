/** @format */

import {AppRegistry} from 'react-native';
import WordListComponent from './WordListComponent';
import SplashComponent from './SplashComponent';
import AppComponent from './AppComponent';
import {name as appName} from './app.json';
import App from './MultipleFlatlistTest'
// import SQLiteDemo from './SQLiteDemo';

// AppRegistry.registerComponent(appName, () => WordListComponent);
AppRegistry.registerComponent(appName, () => AppComponent);
// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => SQLiteDemo);
