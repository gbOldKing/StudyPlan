import React, { Component } from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    DrawerItems,
    SafeAreaView
} from 'react-navigation'
import {BottomTabBar} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage'
import FavoritePage from '../pages/FavoritePage'
import MyPage from '../pages/MyPage'
import CustomKey from "../pages/CustomKey";

/*Stack导航器*/

const TabNavigator=createBottomTabNavigator({
    PopularPage:{
        screen:PopularPage,
        navigationOptions:{
            tabBarLabel:'Popular',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-home':'ios-home-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        }
    },
    TrendingPage:{
        screen:TrendingPage,
        navigationOptions:{
            tabBarLabel:'Trending',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-chatbubbles':'ios-chatbubbles-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        }
    },
    FavoritePage:{
        screen:FavoritePage,
        navigationOptions:{
            tabBarLabel:'Favorite',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-aperture':'ios-aperture-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        }
    },
    MyPage:{
        screen:MyPage,
        navigationOptions:{
            tabBarLabel:'My',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-bug':'ios-bug-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        }
    },
},{
    tabBarOptions:{
        showIcon: true,
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        activeTintColor: '#2196f3',
    }
});
const RouteConfigs = {
    TabNavigator: TabNavigator,
    CustomKey:CustomKey
};

const StackNavigatorConfig = {
    navigationOptions: {
        header: null,
    },
    mode: 'card',
    headerMode: 'screen',
};

export const AppStackNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);



