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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import Page4 from '../pages/Page4'
import Page5 from '../pages/Page5'
import {Button, ScrollView} from 'react-native'

class TabBarComponent extends React.Component{
    constructor(props){
        super(props);
        this.theme={
            tintColor:this.props.activeTintColor,
            updateTime:new Date().getTime()
        };
    }
    render(){
        const {routes,index}=this.props.navigation.state;
        const {theme} =routes[index].params || '';
        if(theme && theme.updateTime > this.theme.updateTime){
            this.theme =theme;
        }
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.theme.tintColor || this.props.activeTintColor}
        />

    }
}
export const DrawerNav=createDrawerNavigator({
    Page4:{
        screen:Page4,
        navigationOptions:{
            drawerLabel:'Page4',
            drawerIcon:({tintColor})=>(
                <MaterialIcons
                    name={"drafts"}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    Page5:{
        screen:Page5,
        navigationOptions:{
            drawerLabel:'Page5',
            drawerIcon:({tintColor})=>(
                <MaterialIcons
                    name={"drafts"}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    }
},{
    contentOptions:{
      activeTintColor:'#e89'
    },
    drawerBackgroundColor:'yellowgreen',
    contentComponent:(props)=>(
        <ScrollView style={{backgroundColor:'#987666',flex:1}}>
            <SafeAreaView forceInset={{top:'always',horizontal:'never'}}>
                <DrawerItems
                    {...props}
                />
            </SafeAreaView>
        </ScrollView>
    ),
});
export const APPTabNavigator=createBottomTabNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{
            tabBarLabel:'Page1',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-home':'ios-home-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        }
    },
    Page2:{
        screen:Page2,
        navigationOptions:{
            tabBarLabel:'Page2',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-people':'ios-people-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        }
    },
    Page3:{
        screen:Page3,
        navigationOptions:{
            tabBarLabel:'Page3',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-chatboxes':'ios-chatboxes-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        },
    }
},{
    tabBarComponent:TabBarComponent,
    tabBarOptions:{
        showIcon: true,
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        activeTintColor: '#EB3695',
    }
});
export const APPStackNavigator = createStackNavigator({
    HomePage:{
        screen:HomePage,
    },
    Page1:{
        screen:Page1,
        navigationOptions:({navigation})=>({
            title:`${navigation.state.params.name}页面名`
        })
    },
    Page2:{
        screen:Page2,
        navigationOptions:({navigation})=>({
            title:'Page2'
        })
    },
    Page3:{
        screen:Page3,
        navigationOptions:(props)=> {
            const {navigation} = props;
            const {state , setParams}=navigation;
            const {params}=state;
            return{
                title:params.title?params.title:'This is Page2',
                headerRight:(
                    <Button
                        title={params.mode==='edit'?'保存':'编辑'}
                        onPress={()=>{
                            setParams({mode:params.mode==='edit' ? "":"edit"})
                        }}
                    />
                )
            }
        }
    },
    TabNav:{
        screen:APPTabNavigator,
        navigationOptions:{
            title:'This is TabNavigator'
        }
    },
    DrawerNav:{
        screen:DrawerNav,
        navigationOptions:{
            title:'This is DrawerNav'
        }
    }
},{
    navigationOptions:{
       title:'首页'  /*全局设置头部title名称,层级低*/
    }
});