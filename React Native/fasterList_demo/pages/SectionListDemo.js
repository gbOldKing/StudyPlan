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
  ActivityIndicator,
    SectionList
} from 'react-native';

type Props = {};
const CITY_NAMES=[{
        title:'一线',
        data:['南宁','北京','上海','深圳','广州'],
    },{
        title:'二三线',
        data:['柳州','杭州','成都','天津','苏州','玉林','贵州','哈尔滨'],
    }];
export default class SectionListDemo extends Component<Props> {
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
    _renderSectionHeader({section}){
      return(
          <View style={styles.sectionHeader}>
              <Text style={styles.headerText}>{section.title}</Text>
          </View>
      )
    }
  render() {
    return (
      <View style={styles.container}>
        <SectionList
            style={{width:'100%'}}
            sections={this.state.dataArray}
            keyExtractor = {SectionListDemo._extraUniqueKey}
            renderItem={(data)=> SectionListDemo._renderItem(data)}
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
            renderSectionHeader={(data)=>this._renderSectionHeader(data)}
            ItemSeparatorComponent={()=><View style={styles.line}/>}
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
      height:50,
      alignItems:'center',
      justifyContent:'center',
      marginLeft:10,
      marginRight:10,
      marginTop:10,
  },
  text:{
    fontSize:18,
    color:'#333',
  },
    sectionHeader:{
        flex:1,
        height:50,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
      color:'#fff',
    },
    line:{
      flex:1,
        height:1,
        backgroundColor:'orange'
    }
});
