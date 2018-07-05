import { AppRegistry,YellowBox} from 'react-native';
import App from './App';
import {createStackNavigator} from 'react-navigation'
import FlatListDemo from './pages/FlatListDemo'
import SwipeableFlatListDemo from './pages/SwipeableFlatListDemo'
import SectionListDemo from './pages/SectionListDemo'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const AppRoot = createStackNavigator({
    App:{
        screen:App,
    },
    FlatListDemo:{
        screen:FlatListDemo,
        navigationOptions:{
            title:'FlastListDemo'
        }
    },
    SwipeableFlatListDemo:{
        screen:SwipeableFlatListDemo,
        navigationOptions:{
            title:'SwipeableFlatListDemo'
        }
    },
    SectionListDemo:{
        screen:SectionListDemo,
        navigationOptions:{
            title:'SectionListDemo'
        }
    }
});
AppRegistry.registerComponent('fasterList_demo', () => AppRoot);
