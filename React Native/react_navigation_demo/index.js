import { AppRegistry,YellowBox } from 'react-native';
import App from './App';

/*忽略某些警告信息*/
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Warning: TabBarBottom is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('react_navigation_demo', () => App);
