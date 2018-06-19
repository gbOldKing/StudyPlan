/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      selectedTab:'home',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab==='home'}
            title="Home"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={()=> <Image style={styles.icon} source={require('./res/images/ic_polular.png')}/>}
            renderSelectedIcon={()=> <Image style={styles.icon} source={require('./res/images/ic_polular.png')}/>}
            badgeText="1"
            onPress={()=> this.setState({selectedTab:'home'})}>
              <View>
                  <Text>Home</Text>
              </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab==='profile'}
            title="Profile"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={()=> <Image style={styles.icon} source={require("./res/images/ic_polular.png")}/>}
            renderSelectedIcon={()=> <Image style={styles.icon} source={require("./res/images/ic_polular.png")}/>}
            badgeText="1"
            onPress={()=> this.setState({selectedTab:'profile'})}>
            <View>
                <Text>profile</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === '音乐'}
              title="音乐"
              titleStyle={styles.tabText}
              selectedTitleStyle={styles.selectedTabText}
              renderIcon={() => <Image style={styles.icon} source={require("./res/images/ic_polular.png")} />}
              renderSelectedIcon={() => <Image style={styles.icon} source={require("./res/images/ic_polular.png")} />}
              onPress={() => this.setState({ selectedTab: '音乐' })}>
              <View>
                  <Text>音乐</Text>
              </View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    tabText:{
        color:'#000000',
        fontSize:10
    },
    selectedTabText:{
        color:'#D81E06'
    },
    icon:{
        width:20,
        height:20
    }
});
