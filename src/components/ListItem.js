import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../common/Styles';
import {NO_AVATAR} from '../common/constants';

export default class ListItem extends Component {

    loadItem = () => {
        const {item, loadItem} = this.props;
        loadItem(item);
    }
    
    render(){
        const {item: {name, profile_image, email, company}} = this.props;
        return (<TouchableOpacity style={[styles.mainWrap, styles.rowContent]} onPress={()=>{this.loadItem();}}>
                    <View style={styles.profileInfo}>
                        <View style={[styles.rowContent, styles.alignCenter]}>
                            <View style={[styles.alignCenter, styles.avatarWrap]}>
                                <View style={styles.avatarStyle}>
                                    <Image style={styles.listAvatar} source={{uri: profile_image ? profile_image : NO_AVATAR}} />
                                </View>
                            </View>
                            <View style={styles.nameWrap}>
                                <Text style={[styles.textBold]}>{name}</Text>
                                <Text>{email}</Text>
                                {(company && company.name) && <Text style={styles.companyName}>{company.name}</Text>}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>);
    }
}