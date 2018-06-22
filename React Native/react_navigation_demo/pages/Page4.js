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
export default class Page4 extends Component<Props> {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Page4
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
                    title="Go to Page5"
                    onPress={()=>{
                        navigation.navigate('Page5');
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
        backgroundColor: '#eee',
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
