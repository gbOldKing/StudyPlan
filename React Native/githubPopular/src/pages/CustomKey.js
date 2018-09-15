import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import ViewUtils from '../util/ViewUtils'
import NavigationBar from '../component/NavigationBar'
import LanguageDao, {FLAG_LANGUAGE} from '../expand/DAO/LanguageDao'

export default class CustomKey extends Component {
    constructor(props) {
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE);
        this.state = {
            dataArray:[123]
        };
    }

    componentWillMount() {
        this.loadData();
    }

    loadData() {
        this.languageDao.fetchKyes()
            .then(result => {
                console.log(result);
                this.setState({
                    dataArray: result
                })
            })
            .catch(error => {
                console.log(1);
                console.log(error)
            })
    }

    onSave() {
        this.props.navigation.goBack();
    };

    renderView() {
        return (
            <View>
                <Text style={{height: 400, width: '100%'}}>{JSON.stringify(this.state.dataArray)}</Text>
            </View>
        )
    }

    render() {
        let rightButton = <View>
            <TouchableOpacity onPress={() => this.onSave()}>
                <Text style={{color: '#fff'}}>SAVE</Text>
            </TouchableOpacity>
        </View>;
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'自定义标签'}
                    statusBar={{
                        backgroundColor: '#2196f3'
                    }}
                    leftButton={ViewUtils.getLeftButton(() => this.onSave())}
                    rightButton={rightButton}
                />
                <ScrollView>
                    {this.renderView()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});