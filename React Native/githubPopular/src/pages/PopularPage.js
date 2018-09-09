
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList
} from 'react-native';
import DateRepository from '../expand/DAO/DateRepository'
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import RepositoryCell from '../component/RepositoryCell'
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
                <ScrollableTabView
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
        }
    }

    _extraUniqueKey(item , index){
        return "index"+index+item;
    }

    componentDidMount() {
        this.loadData();
    }
    loadData(){
        let url = URL+this.props.tabLabel+QUERY_STR;
        this.DateRepository.fetchNetRepository(url)
            .then(result=>{
                this.setState({
                    dataSource:result.items
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