import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
export default class ViewUtils{
    static getLeftButton(callBack){
        return(
            <TouchableOpacity onPress={callBack}>
                <Text style={{color:'#fff'}}>返回</Text>
            </TouchableOpacity>
        )
    }
}