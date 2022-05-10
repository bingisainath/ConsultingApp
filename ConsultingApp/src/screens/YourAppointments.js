import { View, Text, FlatList,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import {getMyAppointments} from '../ServerApis/UserApis';

const DetailsScreen = (props) => {

  const {navigation} = props;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDetails();
    });
    return unsubscribe;
  }, [navigation]);

  const [appointmentsData,setAppointmentsData] = useState([{}]);
  const  [dateString,setDateString] = useState("");

  const getDetails = async () => {
    try{
      const appointmentsData = await getMyAppointments();
      await setAppointmentsData(appointmentsData.data);
      //console.log("appointmentsData : ",appointmentsData.data);  
      // const stringDate = `${appointmentsData.data.DOB}`;
      // const dateString1=stringDate.slice(0,10)
      // setDateString(dateString1);
      // const stringName = `${appointmentsData.data.doctorEmail}`;
      // const NameString1=stringName.slice(0,10)
      // const data = {
      //   reason:appointmentsData.data.reason,
      //   data:dateString1,
      //   doctorEmail:appointmentsData.data.doctorEmail,
      //   doctorName:NameString1,
      // }
    }catch (e) {
      console.log(e);
    }
  }
  
  const [doctorEmail,setDoctorEmail] = useState('');


  return (
    <View style={styles.ViewFlatList} onLayout={getDetails}>
      <FlatList 
        data={appointmentsData}
        renderItem={({item}) => (
          <View style={styles.flatList}>
              <View style={styles.flatListText}>
                <Text style={styles.flatListTextTitle}>{item.doctorEmail}</Text>
                <Text style={styles.flatListTextDesciption}>
                  {item.date}
              </Text>
            </View>
          </View>
        )}
      />
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
});

export default DetailsScreen