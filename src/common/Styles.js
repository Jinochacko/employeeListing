import { StyleSheet, Platform, StatusBar } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
    page: {flex: 1, backgroundColor: '#ebebeb'},
    whiteBg: {backgroundColor: '#fff'},
    statusBar: {
      height: STATUSBAR_HEIGHT
    },
    scrollView: {paddingTop: 15, paddingBottom: 15, backgroundColor: '#F6F7F8'},
    rowContent: {flex: 1, flexDirection: 'row', backgroundColor: '#fff'},
    mainWrap: { margin: 10, marginTop: 0, padding: 20, backgroundColor: '#fff', borderRadius: 5,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
    },
    lightShadow: {
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
    },
    imageStyle: {width: 75, height: 75},
    operatorWrap: {padding: 15, paddingRight: 0},
    operatorItem: {width: 80, height: 80, marginRight: 5, marginBottom: 5, marginLeft: 1, padding: 2},
    profileInfo: {flex: 5},
    alignCenter: {alignItems: 'center', justifyContent: 'center'},
    alignSelfCenter: {alignSelf: 'center'},
    avatar: {borderRadius: 40, height: 40, width: 40, flex: 2},
    avatarWrap: {flex: 1},
    nameWrap: {flex: 5, marginLeft: 10},
    listAvatar: {width: 50, height: 50, borderRadius: 50},
    detailsAvatar: {width: 100, height: 100, borderRadius: 150, marginTop: 10, marginBottom: 10},
    searchWrap: {padding: 10},
    detailsWrap: {padding: 20},
    dateInfo: {flex: 2},
    textRight: {textAlign: 'right'},
    textBold:  {fontWeight: '700'},
    searchInput: { borderRadius: 20, padding: 5, paddingLeft: 20, backgroundColor: '#fff', width: '100%'},
    companyName: {color: "#2AACE2"},
    detailsName: {fontSize: 18},
    topMargin: {marginTop: 5},
    section: {padding: 15, paddingTop: 5, marginTop: 10, backgroundColor: '#ebebeb', borderRadius: 10}
});

export default styles;