// import { View, Text,Button,Alert,StyleSheet,Image } from 'react-native'
// import React,{useState} from 'react'

// import {getuserDetails} from '../ServerApis/UserApis';

// const ProfileScreen = (props) => {

//   const {navigation} = props
  
//   const [userData,setUserData] = useState([{}]);

//   React.useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       getDetails();
//     });
//     return unsubscribe;
//   }, [navigation]);

//   const getDetails = async () => {
//     const data = await getuserDetails();
//     await setUserData(data);
//     console.log(userData);
//   }

//   return (
//     <View style={styles.mainView} onLayout={getDetails}>
//       <View style={styles.infoContainer}>
//         <Image
//           style={styles.image}
//           source={require('../assets/logo3.png')}
//         />
//         <Text style={styles.text}>Name :  {userData.name}</Text>  
//         <Text style={styles.text}>Email :  {userData.email}</Text>
//         <Text style={styles.text}>Date Of Birth :  {userData.DOB}</Text>
//         <Text style={styles.text}>Address :  {userData.address}</Text>
//         <Text style={styles.text}>Phone No : {userData.phone}</Text>
//       </View>
//     </View>
//   )
// }

// export default ProfileScreen

// const styles=StyleSheet.create({
//   mainView:{
//     height:"100%",
//     alignItems:"center",
//     //justifyContent:"center",
//     backgroundColor:"#00938770"
//   },
//   text:{
//     marginTop:15,
//     marginBottom:15,
//     fontSize:20,
//     fontWeight:"bold",
//     color:"#fff",
//     marginLeft:20
//   },
//   infoContainer:{
//     alignItems:"baseline",
//     justifyContent:"center",
//     backgroundColor:"#00938799",
//     width:"85%",
//     borderRadius:10,
//     height:"70%",
//     borderWidth:4,
//     borderColor:"#00000090",
//     marginTop:60,
//   },
//   image:{
//     width:"60%",
//     height:"60%",
//     marginLeft:20,
//   }
// })

import { View, Text,Button,Alert,StyleSheet,Image } from 'react-native'
import React,{useState} from 'react'

import {getuserDetails} from '../ServerApis/UserApis';

const ProfileScreen = (props) => {

  const {navigation} = props
  
  const [userData,setUserData] = useState([{}]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDetails();
    });
    return unsubscribe;
  }, [navigation]);

  const  [dateString,setDateString] = useState("");

  const getDetails = async () => {
    const data = await getuserDetails();
    await setUserData(data);
    const stringDate = `${userData.DOB}`;
    const dateString1=stringDate.slice(0,10)
    setDateString(dateString1);
    console.log("datestring : ",dateString1)
  }

  return (
    <View style={styles.mainView} onLayout={getDetails}>
      <View style={styles.infoContainer}>
        {/* <Image
          style={styles.image}
          source={require('../assets/logo3.png')}
        /> */}
        <Text style={styles.text}>Name :  {userData.name}</Text>  
        <Text style={styles.text}>Email :  {userData.email}</Text>
        <Text style={styles.text}>Date Of Birth :  {dateString}</Text>
        <Text style={styles.text}>Address :  {userData.address}</Text>
        <Text style={styles.text}>Phone No : {userData.phone}</Text>
      </View>
    </View>
  )
}

export default ProfileScreen

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