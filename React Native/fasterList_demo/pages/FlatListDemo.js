/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
const CITY_NAMES=['南宁','北京','上海','深圳','广州','柳州','杭州','成都','天津','苏州','玉林','贵州','哈尔滨'];
export default class FlatListDemo extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      isLoading:false,
      dataArray:CITY_NAMES,
    }
  }
  static _extraUniqueKey(item , index){
        return "index"+index+item;
  }
  loadData(refreshing){
      if(refreshing){
          this.setState({
              isLoading:true
          });
      }
      setTimeout(()=>{
          let dataArray=[];
          if(refreshing){
              for (let i=this.state.dataArray.length-1;i>=0;i--){
                  dataArray.push(this.state.dataArray[i]);
              }
          }else{
              dataArray=this.state.dataArray.concat(CITY_NAMES);
          }
          this.setState({
              dataArray:dataArray,
              isLoading:false
          })

      },1000)
  }
  enIndicator(){
      return(
          <View>
              <ActivityIndicator
                  size={'large'}
                  animating={true}
              />
          </View>
      )
  }
  static _renderItem(data){
    return(
        <View style={styles.item} keys={data.index}>
          <Text style={styles.text}>{data.item}</Text>
        </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
            style={{width:'100%'}}
            data={this.state.dataArray}
            keyExtractor = {FlatListDemo._extraUniqueKey}
            renderItem={(data)=> FlatListDemo._renderItem(data)}
            /*refreshing={this.state.isLoading}
            onRefresh={()=>{
                this.loadData();
            }}*/
            refreshControl={
                <RefreshControl
                    title={'Loading'} //IOS
                    colors={['orange','green']} //android
                    tintColor={['orange']} //IOS
                    refreshing={this.state.isLoading}
                    onRefresh={()=> {
                        this.loadData(true);
                    }}
                />
            }
            ListFooterComponent={()=> this.enIndicator()}
            onEndReached={()=>{
                this.loadData()
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
    backgroundColor: '#fff',

  },
  item:{
      flex: 1,
      backgroundColor:'#d5ee52',
      height:100,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:10,
      marginRight:10,
      marginTop:10,
  },
  text:{
    fontSize:18,
    color:'#fff',
  }
});
