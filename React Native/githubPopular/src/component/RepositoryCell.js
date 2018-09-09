import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class RepositoryCell extends Component {
    render() {
        const {item} = this.props;
        return (
            <TouchableOpacity style={styles.container}>
                <Text style={styles.title}>{item.full_name}</Text>
                <Text style={styles.desc}>{item.description}</Text>
                <View style={styles.footer}>
                    <View style={styles.footerItem}>
                        <Text>Author：</Text>
                        <Image style={styles.img} source={{uri: item.owner.avatar_url}}/>
                    </View>
                    <View style={styles.footerItem}>
                        <Text>Stars：</Text>
                        <Text>{item.stargazers_count}</Text>
                    </View>
                    <Ionicons name={'ios-star-outline'} size={24} color={'#333'}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
        padding: 10,
        elevation: 4,
        borderWidth:0.5,
        borderColor:'#999'
    },
    title: {
        fontSize: 16,
        color: '#000',
        lineHeight: 30
    },
    desc:{
      lineHeight:20,
        color:'#999',
        marginTop:10
    },
    footerItem: {
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 22,
        height: 22,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    }
});