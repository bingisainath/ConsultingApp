import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {AuthContext} from '../../components/context';
import {ConsultantDetails} from '../../Data/ConsultantData'

import {
  consultantLogout,
  getConsultantDetials,
} from '../../ServerApis/ConsultantApis';

export function ConsultantDrawerContent(props) {

  const paperTheme = useTheme();

  const {consultantSignIn} = React.useContext(AuthContext);

  const {toggleTheme} = React.useContext(AuthContext);

  const [consultantData, setConsultantData] = React.useState("");
//   const [consultantName, setConsultantName] = React.useState("");
//   const [consultantAddress, setConsultantAddress] = React.useState("");

  const logout1 = () => {
    consultantLogout();
    console.log('Logout pressed');
    consultantSignIn(false);
  };

  const getDetails = async () => {
    const data = await getConsultantDetials();
    const temp = data.doctorEmail
    await setConsultantData(temp);
    // console.log("temp : ",temp);
    // //await getaddress(temp);
    // console.log("data of address : ",consultantName,consultantAddress);
  };

  return (
    <View style={{flex: 1}} onLayout={getDetails}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrb7XeVpElaj3yF0M2zBadpBwR1H32HQQumw&usqp=CAU',
                }}
                size={70}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>{consultantData}</Title>
                {/* <Caption style={styles.caption}>@consultant_1</Caption> */}
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  Country:
                </Paragraph>
                <Caption style={styles.caption}>India</Caption>
              </View>
              {/* <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View> */}
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({focused}) => (
                <FontAwesome5 name="home" color={'#009387'} size={20} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Your Appointments');
              }}
            />
            <DrawerItem
              icon={({focused}) => (
                <FontAwesome5 name="user" color={'#009387'} size={20} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('ConsultantProfileScreen');
              }}
            />
            <DrawerItem
              icon={({focused}) => (
                <FontAwesome5 name="headset" color={'#009387'} size={20} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
            <DrawerItem
              icon={({focused}) => (
                <FontAwesome5 name="plus-square" color={'#009387'} size={20} />
              )}
              label="AddSlot"
              onPress={() => {
                props.navigation.navigate('AddSlot');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text style={{fontWeight: 'bold', color: '#009387'}}>
                  Dark Theme
                </Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <FontAwesome5 name="user-lock" color={'#009387'} size={20} />
          )}
          label="Sign Out"
          onPress={() => logout1()}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#009387',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
