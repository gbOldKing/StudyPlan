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
export default class Page3 extends Component<Props> {
    render() {
        const {navigation}=this.props;
        const {state,setParams}=navigation;
        const {params}=state;
/*        const showText=params.mode==='edit'?'正在编辑':'编辑完成';*/
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Page3
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text=>{
                        setParams({title:text})
                    }}
                />
                <Button
                    title="go back"
                    onPress={()=>{
                    navigation.goBack();
                }}/>
{/*                <Text>
                    {showText}
                </Text>*/}
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
