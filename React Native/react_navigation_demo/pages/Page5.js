import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

type Props = {};
export default class Page5 extends Component<Props> {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Page5
                </Text>
                <Button
                    title="打开侧边栏"
                    onPress={()=>{
                        navigation.openDrawer();
                }}/>
                <Button
                    title="Toggle"
                    onPress={()=>{
                        navigation.toggleDrawer();
                    }}/>
                <Button
                    title="Go to Page4"
                    onPress={()=>{
                        navigation.navigate('Page4');
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input:{
        height:50,
        width:200,
        margin:20,
        borderColor:'#ddd',
        borderWidth:1,
    },
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
