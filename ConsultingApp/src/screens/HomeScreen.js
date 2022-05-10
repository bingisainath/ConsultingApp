// import { View, Text,FlatList,StyleSheet,Image,TouchableOpacity } from 'react-native'
// import React from 'react'
// import {ConsultantDetails} from '../Data/ConsultantData'

// const HomeScreen = (props) => {

//   const {navigation } = props

//   return (
//     <View style={styles.ViewFlatList}>
//       <FlatList 
//         data={ConsultantDetails}
//         renderItem={({item}) => (
//           <View style={styles.flatList}>
//               <Image
//                 style={styles.image}
//                 source={require('../assets/logo2.jpg')}
//               />
//               <View style={styles.flatListText}>
//                 <Text style={styles.flatListTextTitle}>{item.doctorName}</Text>
//                 <Text style={styles.flatListTextDesciption}>
//                   {item.specialization}
//                 </Text>
//               </View>
//               <TouchableOpacity style={styles.fav} onPress={() => navigation.navigate('BookAppointment',{docEmail:item.email,docName:item.doctorName})}>
//                     <Text style={{color: 'white',paddingTop:5,paddingLeft:10,paddingRight:10, fontWeight:'bold'}}>      Book</Text>
//                     <Text style={{color: 'white', paddingBottom:5,paddingLeft:10,paddingRight:10,fontWeight:'bold'}}>Appointment</Text>
//               </TouchableOpacity>
//             </View>
//         )}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   ViewFlatList: {
//     flex:0.9,
//     marginTop: 10,
//     marginStart: 10,
//     marginEnd: 10,
    
//   },
//   flatList: {
//     flex: 1,
//     height: 200,
//     width:"90%",
//     marginTop: 15,
//     marginLeft:17,
//     marginBottom: 5,
//     padding: 5,
//     borderRadius: 20,
//     backgroundColor: 'white',
//     borderWidth:2,
//     borderColor:'black',
//   },
//   image: {
//     height: '65%',
//     borderRadius: 60,
//     width:120,
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
//   headline: {
//     marginTop: 10,
//     marginStart: 10,
//     marginEnd: 10,
//   },
//   fav: {
//     position: 'absolute',
//     margin: 10,
//     right: 0,
//     bottom: 0,
//     marginRight: 10,
//     borderRadius: 20,
//     backgroundColor: '#01ab9d',
//     border: 5,
//     alignContent:'center',
//     borderWidth:2,
//     borderColor:'black',
//   },
// });

// export default HomeScreen

import { View, Text,FlatList,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {ConsultantDetails} from '../Data/ConsultantData'

const HomeScreen = (props) => {

  const {navigation } = props

  return (
    <View style={styles.ViewFlatList}>
      <View style={{backgroundColor:"#01ab9d50",marginTop:13}}></View>
      <FlatList 
        data={ConsultantDetails}
        renderItem={({item}) => (
          <View style={styles.flatList}>
              <Image
                style={styles.image}
                source={require('../assets/logo2.jpg')}
              />
              <View style={styles.flatListText}>
                <Text style={styles.flatListTextTitle}>{item.doctorName}</Text>
                <Text style={styles.flatListTextDesciption}>
                  {item.specialization}
                </Text>
              </View>
              <TouchableOpacity style={styles.fav} onPress={() => navigation.navigate('BookAppointment',{docEmail:item.email,docName:item.doctorName})}>
                    <Text style={{color: 'white',paddingTop:6,paddingLeft:10,paddingRight:10, fontWeight:'bold',fontSize:10,}}>Book</Text>
                    <Text style={{color: 'white', paddingBottom:5,paddingLeft:10,paddingRight:10,fontWeight:'bold',fontSize:10,}}>Appointment</Text>
              </TouchableOpacity>
            </View>
        )}
      />
      <View style={{backgroundColor:"#01ab9d50",marginTop:15}}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  ViewFlatList: {
    flex:1,
    // marginTop: 10,
    // marginStart: 10,
    // marginEnd: 10,
    backgroundColor:"#01ab9d10",
    
  },
  flatList: {
    flex: 1,
    height: 190,
    width:"82%",
    marginTop: 15,
    marginLeft:35,
    marginBottom: 8,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth:4.5,
    borderColor:'#00000030',
    shadowColor:"#00000070"
  },
  image: {
    height: '55%',
    borderRadius: 60,
    width:100,
    marginLeft: 100,
    marginTop:4
  },
  flatListText: {
    flex: 1,
    flexDirection: 'column',
    margin: 2,
    padding: 2,
    borderRadius: 10,
    marginTop:20
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
  headline: {
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
  },
  fav: {
    position: 'absolute',
    margin: 10,
    right: 0,
    bottom: 0,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#01ab9d',
    height:45,
    width:90,
    alignItems:"center",

    border: 5,
    borderWidth:2,
    borderColor:'#00000030',

  },
});

export default HomeScreen