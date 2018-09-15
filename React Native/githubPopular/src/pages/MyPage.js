
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../component/NavigationBar'

export default class MyPage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'我的'}
                />
               <Text onPress={()=>{navigation.navigate('CustomKey',{
                   params:{...this.props}
               })}}>自定义标签</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
});