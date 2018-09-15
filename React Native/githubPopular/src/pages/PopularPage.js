
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    RefreshControl
} from 'react-native';
import DateRepository from '../expand/DAO/DateRepository'
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import RepositoryCell from '../component/RepositoryCell'
import NavigationBar from '../component/NavigationBar'
const URL='https://api.github.com/search/repositories?q=';
const QUERY_STR='&sort=stars';

export default class PopularPage extends Component {
    constructor(props){
        super(props);
        this.state={
            result:'',
            dataSource:''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'最热'}
                    statusBar={{
                        backgroundColor:'#2196f3'
                    }}
                />
                <ScrollableTabView
                    tabBarBackgroundColor='#2196f3'
                    tabBarInactiveTextColor='#ddd'
                    tabBarActiveTextColor='#fff'
                    tabBarUnderlineStyle={{backgroundColor:'#e7e7e7',height:2}}
                    renderTabBar={()=><ScrollableTabBar/>}
                >
                    <PopularTab tabLabel="ios">ios</PopularTab>
                    <PopularTab tabLabel="android">android</PopularTab>
                    <PopularTab tabLabel="react">react</PopularTab>
                    <PopularTab tabLabel="java">java</PopularTab>
                </ScrollableTabView>
            </View>
        );
    }
}
class PopularTab extends Component{
    constructor(props){
        super(props);
        this.DateRepository=new DateRepository();
        this.state={
            result:'',
            isLoading:false
        }
    }

    _extraUniqueKey(item , index){
        return "index"+index+item;
    }

    componentDidMount() {
        this.loadData();
    }
    loadData(){
        this.setState({
            isLoading:true
        });
        let url = URL+this.props.tabLabel+QUERY_STR;
        this.DateRepository.fetchNetRepository(url)
            .then(result=>{
                this.setState({
                    dataSource:result.items,
                    isLoading:false
                })
            })
            .catch(error=>{
                this.setState({
                    dataSource:JSON.stringify(error)
                })
            })
    }
    _renderItem(item){
        return <RepositoryCell item={item}/>
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    style={{backgroundColor:'#eee',paddingTop:5}}
                    data={this.state.dataSource}
                    keyExtractor = {this._extraUniqueKey}
                    renderItem={(item) => this._renderItem(item.item)}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'} //IOS
                            colors={['orange', 'green']} //android
                            tintColor={['orange']} //IOS
                            refreshing={this.state.isLoading}
                            onRefresh={() => {
                                this.loadData()
                            }}
                        />
                    }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    input:{
        borderWidth:1,
    },
    text:{
        fontSize:30
    }

});