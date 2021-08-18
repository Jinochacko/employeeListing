import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import styles from '../common/Styles';

export default class SearchItem extends Component {

    search = (text) => {
        const {search} = this.props;
        search(text);
    }

    render(){
        return (
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} placeholder="Search" onChangeText={(text)=>this.search(text)} />
            </View>
        );
    }
}