// import {View, Text, FlatList, StyleSheet, Image,TouchableOpacity} from 'react-native';
// import React from 'react';

// import {ConsultantDetails} from '../../Data/ConsultantData';
// import {getAppointments} from '../../ServerApis/ConsultantApis';

// const ConsultantHomeScreen = props => {
//   const {navigation} = props;

//   React.useEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//       getAppointment();
//     });
//     return unsubscribe;
//   }, [navigation]);

//   const [appointments, setAppointments] = React.useState([{}]);

//   const getAppointment = async () => {
//     const data = await getAppointments();
//     await console.log("data : ",data);
//     await setAppointments(data.data);
//     console.log("Appointments : ",appointments)
//   };

//   return (
//     <View style={styles.ViewFlatList} onLayout={getAppointment}>
//       <FlatList
//         data={appointments}
//         renderItem={({item}) => (
//           <View style={styles.flatList}>
//             <View style={styles.flatListText}>
//               <Text style={styles.flatListTextTitle}>{item.userEmail}</Text>
//               <Text style={styles.flatListTextDesciption}>
//                 {item.reason}
//               </Text>
//             </View>
//             <TouchableOpacity style={styles.fav} onPress={() => navigation.navigate('BookAppointment',{docEmail:item.email,docName:item.doctorName})}>
//                     <Text style={{color: 'white',paddingTop:5,paddingLeft:10,paddingRight:10, fontWeight:'bold'}}>      Cancel</Text>
//                     <Text style={{color: 'white', paddingBottom:5,paddingLeft:10,paddingRight:10,fontWeight:'bold'}}>Appointment</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={item => item._id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   ViewFlatList: {
//     flex: 1,
//     marginTop: 10,
//     marginStart: 10,
//     marginEnd: 10,
//   },
//   flatList: {
//     flex: 1,
//     height: 100,
//     width: '90%',
//     marginTop: 15,
//     marginLeft: 17,
//     marginBottom: 5,
//     padding: 5,
//     borderRadius: 20,
//     backgroundColor: 'white',
//     borderWidth: 2,
//     borderColor: 'black',
//   },
//   image: {
//     height: '65%',
//     borderRadius: 60,
//     width: 120,
//     marginLeft: 100,
//   },
//   flatListText: {
//     flex: 1,
//     flexDirection: 'column',
//     margin: 2,
//     padding: 2,
//     borderRadius: 10,
//   },
//   flatListTextTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   flatListTextDesciption: {
//     fontSize: 16,
//     color: 'black',
//   },
//   fav: {
//     position: 'absolute',
//     margin: 10,
//     right: 0,
//     bottom: 0,
//     marginRight: 20,
//     borderRadius: 20,
//     backgroundColor: '#2ff7dc',
//     border: 5,
//   },
//   headline: {
//     marginTop: 10,
//     marginStart: 10,
//     marginEnd: 10,
//   },
// });

// export default ConsultantHomeScreen;

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {ConsultantDetails} from '../../Data/ConsultantData';
import {getAppointments} from '../../ServerApis/ConsultantApis';

const ConsultantHomeScreen = props => {
  const {navigation} = props;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAppointment();
    });
    return unsubscribe;
  }, [navigation]);

  const [appointments, setAppointments] = React.useState([{}]);

  const getAppointment = async () => {
    const data = await getAppointments();
    await console.log('data : ', data);
    await setAppointments(data.data);
    console.log('Appointments : ', appointments);
  };

  return (
    <View style={styles.ViewFlatList} onLayout={getAppointment}>
      <FlatList
        data={appointments}
        renderItem={({item}) => (
          <View style={styles.flatList}>
            <View style={styles.flatListText}>
              <Text style={styles.flatListTextTitle}>{item.userEmail}</Text>
              <Text style={styles.flatListTextDesciption}>{item.reason}</Text>
            </View>
            <TouchableOpacity style={styles.fav} onPress={() =>
                navigation.navigate('CancelAppointment',{email:userEmail})}>
                    <Text style={{color: 'white',paddingTop:6,paddingLeft:10,paddingRight:10, fontWeight:'bold',fontSize:10,}}>Cancel</Text>
                    <Text style={{color: 'white', paddingBottom:5,paddingLeft:10,paddingRight:10,fontWeight:'bold',fontSize:10,}}>Appointment</Text>
              </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ViewFlatList: {
    flex: 1,
    // marginTop: 10,
    // marginStart: 10,
    // marginEnd: 10,
    backgroundColor: '#01ab9d10',
  },
  flatList: {
    flex: 1,
    height: 190,
    width: '82%',
    marginTop: 15,
    marginLeft: 35,
    marginBottom: 8,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 4.5,
    borderColor: '#00000030',
    shadowColor: '#00000070',
  },
  image: {
    height: '55%',
    borderRadius: 60,
    width: 100,
    marginLeft: 100,
    marginTop: 4,
  },
  flatListText: {
    flex: 1,
    flexDirection: 'column',
    margin: 2,
    padding: 2,
    borderRadius: 10,
    marginTop: 20,
  },
  flatListTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  flatListTextDesciption: {
    fontSize: 13,
    color: 'black',
  },
  fav: {
    position: 'absolute',
    margin: 10,
    right: 0,
    bottom: 0,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#01ab9d',
    height: 45,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    border: 5,
    borderWidth: 2,
    borderColor: '#00000030',
  },
  headline: {
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
});

export default ConsultantHomeScreen;
