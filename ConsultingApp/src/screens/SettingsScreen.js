// import {View, Text, TextInput, Button} from 'react-native';
// import React, {useState} from 'react';

// import {getuserDetails} from '../ServerApis/UserApis';

// const SettingsScreen = props => {
//   const {navigation} = props;

//   const [userData, setUserData] = useState([{}]);

//   React.useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       getDetails();
//     });
//     return unsubscribe;
//   }, [navigation]);

//   const getDetails = async () => {
//     const data = await getuserDetails();
//     await setUserData(data);
//     console.log('data', userData);
//   };


//   const [update, setUpdate] = useState(false);
//   const [data, setData] = useState({
//     email: userData.email,
//     password: userData.password,
//     name: '',
//     phone: '',
//     address: '',
//     DOB: '',
//   });

//   const updateDetails = async () => {
//     console.log("data : ",data);
//   }

//   return (
//     <View onLayout={getDetails}>
//       <Text>SettingsScreen</Text>
//       <Button title="Update Profile" onPress={() => setUpdate(true)} />
//       {update ? (
//         <View>
//           <View>
//             <TextInput
//               placeholder="Email"
//               autoCapitalize="none"
//               defaultValue={userData.email}
//               editable={true}
//               onChangeText={(val) => setData({
//                 ...data,
//                 email: val,
//               })}
//               //style={styles.input}
//             />
//             <TextInput
//               placeholder="Name"
//               autoCapitalize="none"
//               defaultValue={userData.name}
//               editable={true}
//               onChangeText={(val) => setData({
//                 ...data,
//                 name: val,
//               })}
//               //style={styles.input}
//             />
//             <TextInput
//               placeholder="DOB"
//               autoCapitalize="none"
//               defaultValue={userData.DOB}
//               editable={true}
//               onChangeText={(val) => setData({
//                 ...data,
//                 DOB: val,
//               })}
//               //style={styles.input}
//             />
//             <TextInput
//               placeholder="Phone"
//               autoCapitalize="none"
//               defaultValue={userData.phone}
//               editable={true}
//               onChangeText={(val) => setData({
//                 ...data,
//                 phone: val,
//               })}
//               //style={styles.input}
//             />
//             <TextInput
//               placeholder="Address"
//               autoCapitalize="none"
//               defaultValue={userData.address}
//               editable={true}
//               onChangeText={(val) => setData({
//                 ...data,
//                 address: val,
//               })}
//               //style={styles.input}
//             />
//           </View>
//           <View>
//             <Button title="Update details" onPress={updateDetails}/>
//           </View>
//         </View>
//       ) : null}
//     </View>
//   );
// };

// export default SettingsScreen;


import {View, Text, TextInput, Button,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import React, {useState} from 'react';

import {getuserDetails,updateProfile} from '../ServerApis/UserApis';

const SettingsScreen = props => {
  const {navigation} = props;

  const [userData, setUserData] = useState([{}]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDetails();
    });
    return unsubscribe;
  }, [navigation]);

  const getDetails = async () => {
    const data = await getuserDetails();
    await setUserData(data);
    await setData({
      email: userData.email,
      password: userData.password,
      name: userData.name,
      phone: userData.phone,
      address: userData.address,
      DOB: userData.DOB,
    })
    console.log('userData', data);
  };


  const [update, setUpdate] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: '',
    phone: '',
    address: '',
    DOB: '',
  });

  const updateDetails = async () => {
    const  sendDetails = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      DOB: data.DOB,
    }
    const returnData = await updateProfile(sendDetails);
    console.log("returnData : ",returnData);
    Alert.alert("Success","User details updated successfully")
  }

  return (
    <View onLayout={getDetails}>
      <View style={styles.header}>
      <Text style={{fontWeight:"bold",color:"#fff"}}>Settings</Text>
      </View>
      {/* <Button title="Update Profile" onPress={() => setUpdate(true)} /> */}
      {update ? (
        <View>
          <View style={{alignItems:"center"}}>
            <Text style={{paddingRight: 190, marginTop: 40}}>Email</Text>
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              defaultValue={userData.email}
              editable={true}
              onChangeText={(val) => setData({
                ...data,
                email: val,
              })}
              style={styles.input}
            />
            <Text style={{paddingRight: 188, marginTop: 5}}>Name</Text>
            <TextInput
              placeholder="Name"
              autoCapitalize="none"
              defaultValue={userData.name}
              editable={true}
              onChangeText={(val) => setData({
                ...data,
                name: val,
              })}
              style={styles.input}
            />
            <Text style={{paddingRight: 150, marginTop: 5}}>Date of Birth</Text>
            <TextInput
              placeholder="DOB"
              autoCapitalize="none"
              defaultValue={userData.DOB}
              editable={true}
              onChangeText={(val) => setData({
                ...data,
                DOB: val,
              })}
              style={styles.input}
            />
            <Text style={{paddingRight: 130, marginTop: 5}}>Phone Number</Text>
            <TextInput
              placeholder="Phone"
              autoCapitalize="none"
              defaultValue={userData.phone}
              editable={true}
              onChangeText={(val) => setData({
                ...data,
                phone: val,
              })}
              style={styles.input}
            />
            <Text style={{paddingRight: 170, marginTop: 5}}>Address</Text>
            <TextInput
              placeholder="Address"
              autoCapitalize="none"
              defaultValue={userData.address}
              editable={true}
              onChangeText={(val) => setData({
                ...data,
                address: val,
              })}
              style={styles.input}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.done} onPress={updateDetails}>
          <Text style={styles.doneText}>Update Details</Text>
        </TouchableOpacity> 
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default SettingsScreen;

const styles=StyleSheet.create({
  header:{
    height:30,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#009387"
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    width: '60%',
    marginBottom: 18,
    textAlign: 'center',
    borderColor: '#009387',
    borderStyle: 'dashed',
    marginTop: 14,
  },
  done: {
    backgroundColor: '#009387',
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    marginLeft:40

  },
  doneText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

})