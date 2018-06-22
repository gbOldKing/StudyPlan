import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

type Props = {};
export default class HomePage extends Component<Props> {
    static navigationOptions={
        headerBackTitle:'返回'
    };
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    这是首页
                </Text>
               <Button
                   title='page1'
                   onPress={()=>{
                        navigation.navigate('Page1',{name:'动态的'})
                   }}
               />
                <Button
                    title='page2'
                    onPress={()=>{
                        navigation.navigate('Page2')
                    }}
                />
                <Button
                    title='page3'
                    onPress={()=>{
                        navigation.navigate('Page3',{title:'动态改变的标题'})
                    }}
                />
                <Button
                    title='TabNav'
                    onPress={()=>{
                        navigation.navigate('TabNav',{title:'This is TabNav'})
                    }}
                />
                <Button
                    title='DrawerNavigator'
                    onPress={()=>{
                        navigation.navigate('DrawerNav',{title:'This is DrawerNav'})
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
