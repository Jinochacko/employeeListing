import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import styles from '../common/Styles';
import AnimateList from '../components/AnimateList';
import ListItem from '../components/ListItem';
import SearchItem from '../components/SearchItem';
import Realm from 'realm';

class EmployeesList extends Component {
    constructor(props){
        super(props);
        this.realm = new Realm({ path: "employeeRealm" });
        const employees = this.realm.objects("Employee");
        this.state = {
            list: employees
        };
    }

    loadDetails = (item) => {
        const { navigation } = this.props;
        navigation.navigate('EmployeeDetails', {item: item.id})
    }

    search = text => {
        const employees = this.realm.objects("Employee").filtered('email CONTAINS[c] $0 OR name CONTAINS[c] $0', text);
        this.setState({list: employees});
    }
    
    renderItem = ({item, index}) => (
        <AnimateList
            index={index}
            direction="x"
            renderContent={<ListItem loadItem={this.loadDetails} item={item} />}
        />
    );

    render(){
        const { list } = this.state;
        
        return (
            <View style={styles.page}> 
                <View style={styles.searchWrap}>
                    <SearchItem search={this.search} />
                </View>               
                {list.length > 0 && (
                    <FlatList data={list} keyExtractor={item=>'employee'+item.id} renderItem={this.renderItem} />
                )}
            </View>
        );
    }
}

export default EmployeesList;