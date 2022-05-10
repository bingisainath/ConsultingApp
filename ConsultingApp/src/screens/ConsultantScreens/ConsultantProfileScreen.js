import {View, Text, Alert,StyleSheet} from 'react-native';
import React from 'react';

import {ConsultantDetails} from '../../Data/ConsultantData';
import {getConsultantDetials} from '../../ServerApis/ConsultantApis';

const ConsultantProfileScreen = props => {
  const {navigation} = props;

  const [consultant, setConsultant] = React.useState([{}]);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getSession();
      getConsultantProfile();
    });
    return unsubscribe;
  }, [navigation]);

  const getSession = async () => {
    const data = await getConsultantDetials();
    console.log(data);
    await setConsultant(data);
  };

  const [doctorDetails, setDoctorDetails] = React.useState({});

  const getConsultantProfile = async () => {
    for (let i = 0; i < ConsultantDetails.length; i++) {
      if (ConsultantDetails[i].email === consultant.doctorEmail) {
        await setDoctorDetails(ConsultantDetails[i]);
      }
    }
    console.log('doctorDetails : ', doctorDetails);
  };

  return (
    <View style={styles.mainView} onLayout={getConsultantProfile}>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Email: {doctorDetails.email}</Text>
        <Text style={styles.text}>clinicName: {doctorDetails.clinicName}</Text>
        <Text style={styles.text}>
          specialization: {doctorDetails.specialization}
        </Text>
        <Text style={styles.text}>
          clinicAddress: {doctorDetails.clinicAddress}
        </Text>
        <Text style={styles.text}>phone: {doctorDetails.phone}</Text>
      </View>
    </View>
  );
};

export default ConsultantProfileScreen;

const styles=StyleSheet.create({
  mainView:{
    height:"100%",
    alignItems:"center",
    //justifyContent:"center",
    backgroundColor:"#00938720"
  },
  text:{
    marginTop:15,
    marginBottom:15,
    fontSize:20,
    fontWeight:"bold",
    color:"#00000098",
    marginLeft:20
  },
  infoContainer:{
    alignItems:"baseline",
    justifyContent:"center",
    backgroundColor:"##00938705",
    width:"85%",
    borderRadius:10,
    height:"60%",
    borderWidth:4,
    borderColor:"#00000070",
    marginTop:120,
  },
})
