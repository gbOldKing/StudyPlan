import React, {Component} from 'react';
import {
    AsyncStorage
} from 'react-native';
import keys from '../../data/keys.json'

export const FLAG_LANGUAGE = {flag_language: 'flag_language_language', flag_key: 'flag_language_key'};
export default class LanguageDao {
    constructor(flag) {
        this.flag = flag;
    }
    fetchKyes() {
        alert('keyfetch');
        return new Promise((resolve,reject) => {
            AsyncStorage.getItem(this.flag,(error,result) => {
                if(error){
                    reject(error);
                    return;
                }
                if (!result){
                    let data=this.flag===FLAG_LANGUAGE.flag_language? keys:null;
                    this.save(data);
                    resolve(data);
                }else {
                    try {
                        resolve(JSON.parse(result));
                    } catch (e) {
                        reject(error);
                    }
                }
            })
        })
    }
    save(data){
        AsyncStorage.setItem(this.flag,JSON.stringify(data),(error)=>{
        })
    }
}