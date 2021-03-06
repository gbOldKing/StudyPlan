import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

type Props = {};
export default class Page1 extends Component<Props> {
    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Page1
                </Text>
                <Button
                    title="go back" onPress={()=>{
                    navigation.goBack();
                }}/>
                <Button
                    title="go Page2" onPress={()=>{
                    navigation.navigate('Page2');
                }}/>
                <Button
                    title="改变主题（橙色）"
                    onPress={()=>{
                    navigation.setParams({
                        theme:{
                            tintColor:'orange',
                            updateTime:new Date().getTime()
                        }
                    })
                }}/>
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
