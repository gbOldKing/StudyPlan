import React, { Component } from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import {Button} from 'react-native'
export const APPTabNavigator=TabNavigator({
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
        screen:Page1,
        navigationOptions:{
            tabBarLabel:'Page3',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={focused?'ios-home':'ios-home-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            ),
        }
    }
},{
    tabBarPosition: 'bottom',
    tabBarOptions:{
        showIcon: true,
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        activeTintColor: '#EB3695',
    }
});
export const APPStackNavigator = StackNavigator({
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
    }
},{
    navigationOptions:{
       title:'首页'  /*全局设置头部title名称,层级低*/
    }
});