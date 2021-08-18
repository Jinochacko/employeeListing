import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../common/Styles';
import {NO_AVATAR} from '../common/constants';
import Realm from 'realm';

class EmployeeDetails extends Component {
    constructor(props){
        super(props);
        const realm = new Realm({ path: "employeeRealm" });
        const employee = realm.objects("Employee").filtered('id = $0', props.route.params.item);
        this.state = {
            employee: employee.length > 0 ? employee[0]: {}
        };
    }

    render(){
        const { employee: {name, company, address, profile_image, email, username, phone, website} } = this.state;
        return (
            <View style={[styles.page, styles.whiteBg, styles.detailsWrap]}>
                <View sty={[styles.alignCenter]}>
                    <Image style={[styles.detailsAvatar, styles.alignSelfCenter]} source={{uri: profile_image ? profile_image : NO_AVATAR}} />
                    <Text style={[styles.alignSelfCenter, styles.companyName, styles.textBold, styles.detailsName, styles.topMargin]}>{name}</Text>
                    <Text style={[styles.alignSelfCenter, styles.textBold, styles.topMargin]}>{username}</Text>
                    <Text style={[styles.alignSelfCenter, styles.topMargin]}>{email}</Text>
                    {phone && <Text style={[styles.alignSelfCenter, styles.topMargin]}>{phone}</Text>}
                    {website && <Text style={[styles.alignSelfCenter, styles.topMargin]}>{website}</Text>}
                </View>
                {(company && company.name) && 
                    (<View style={styles.section}>
                        <Text style={[styles.textBold, styles.topMargin]}>Company</Text>
                        <Text style={[styles.topMargin]}>{company.name}</Text>
                        {company.catchPhrase && <Text style={[styles.topMargin]}>{company.catchPhrase}</Text>}
                        {company.bs && <Text style={[styles.topMargin]}>{company.bs}</Text>}
                    </View>)
                }
                {(address && address.street) && 
                    (<View style={styles.section}>
                        <Text style={[styles.textBold, styles.topMargin]}>Address</Text>
                        <Text style={[styles.topMargin]}>{address.street}</Text>
                        {address.suite && <Text style={[styles.topMargin]}>{address.suite}</Text>}
                        {address.city && <Text style={[styles.topMargin]}>{address.city}</Text>}
                        {address.zipcode && <Text style={[styles.topMargin]}>{address.zipcode}</Text>}
                        {address.geo && <Text style={[styles.topMargin]}>Latitude: {address.geo.lat}, Longitude: {address.geo.lng}</Text>}
                    </View>)
                }
            </View>
        );
    }
}

export default EmployeeDetails;