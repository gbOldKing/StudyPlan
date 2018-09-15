import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Platform,
    StyleSheet,
    StatusBar
} from 'react-native'

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;

export default class NavigationBar extends Component {
    /*设置默认样式*/
    static defaultProps = {
        statusBar: {
            barStyle:'light-content',
            hidden:false
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hide: false
        }
    }
    render() {
        /*IOS平台需要自定义状态栏样式 */
        let statusBar = <View style={[styles.statusBar, Platform.OS === 'ios' ?this.props.statusBar:'']}>
            {/*android状态栏样式*/}
            <StatusBar {...this.props.statusBar}/>
        </View>;
        let titleView =
            this.props.titleView ?
                this.props.titleView
                :
                <Text style={styles.title}>{this.props.title}</Text>;
        let content = <View style={styles.navBar}>
            {this.props.leftButton}
            <View style={styles.titleView}>
                {titleView}
            </View>

            {this.props.rightButton}
        </View>;
        return (
            <View style={styles.container}>
                {statusBar}
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2196f3'
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
    },
    titleView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    title: {
        fontSize: 18,
        color: '#fff',
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
    }
});