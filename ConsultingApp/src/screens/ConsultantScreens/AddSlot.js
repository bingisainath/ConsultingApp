// import {View, Text, TextInput, StyleSheet, Button,Alert} from 'react-native';
// import React from 'react';
// import {
//   getConsultantDetials,
//   consultantAddSlot,
// } from '../../ServerApis/ConsultantApis';

// const AddSlot = () => {
//   const [slotId, setSlotId] = React.useState('');
//   const [Date, setDate] = React.useState('');
//   const [doctorDetails, setDoctorDetails] = React.useState('');

//   const getDetails = async () => {
//     const doctorDetail = await getConsultantDetials();
//     setDoctorDetails(doctorDetail.doctorEmail);
//   };

//   const addSlot = async () => {
//     const data = {
//       slotId: slotId,
//       doctorEmail: doctorDetails,
//       date: Date,
//     };
//     const returnData = await consultantAddSlot(data);
//     console.log('slot details', returnData);
//     Alert.alert("success")
//   };
//   return (
//     <View onLayout={getDetails}>
//       <TextInput
//         placeholder="SlotId"
//         autoCapitalize="none"
//         editable={true}
//         onChangeText={value => {
//           setSlotId(value);
//         }}
//       />
//       <TextInput
//         placeholder="doctorEmail"
//         autoCapitalize="none"
//         defaultValue={doctorDetails}
//         editable={false}
//         onChangeText={value => {
//           setDoctorEmail(value);
//         }}
//       />
//       <TextInput
//         placeholder="Date"
//         autoCapitalize="none"
//         editable={true}
//         onChangeText={value => {
//           setDate(value);
//         }}
//       />
//       <Button title="addSlot" onPress={addSlot} />
//     </View>
//   );
// };

// export default AddSlot;


import {View, Text, TextInput, StyleSheet, Button,TouchableOpacity,Alert} from 'react-native';
import React from 'react';
import {
  getConsultantDetials,
  consultantAddSlot,
} from '../../ServerApis/ConsultantApis';


const AddSlot = () => {
  const [slotId, setSlotId] = React.useState('');
  const [Date, setDate] = React.useState('');
  const [doctorDetails, setDoctorDetails] = React.useState('');

  const getDetails = async () => {
    const doctorDetail = await getConsultantDetials();
    setDoctorDetails(doctorDetail.doctorEmail);
  };

  const addSlot = async () => {
    if(slotId.length>0 && Date.length>0){
    const data = {
      slotId: slotId,
      doctorEmail: doctorDetails,
      date: Date,
    };
    const returnData = await consultantAddSlot(data);
    console.log('slot details', returnData);
    Alert.alert("Success",`Slot added with Slot Id: ${slotId}`)
  }
  else{
    Alert.alert("Alert","Slot Id or Date cannot be Empty")
  }
  };
  return (
 
    <View style={styles.inputContainer} onLayout={getDetails}>
      <Text style={{paddingRight: 190, marginTop: 5}}>Slot Id</Text>
      <TextInput
        placeholder="Enter a Slot Id"
        autoCapitalize="none"
        editable={true}
        onChangeText={value => {
          setSlotId(value);
        }}
        style={styles.input}
      />
      <Text style={{paddingRight: 190, marginTop: 5}}>Email</Text>
      <TextInput
        placeholder="doctorEmail"
        autoCapitalize="none"
        defaultValue={doctorDetails}
        editable={false}
        onChangeText={value => {
          setDoctorEmail(value);
        }}
        style={styles.input}
      />
      <Text style={{paddingRight: 135, marginTop: 5}}>Date and Time</Text>
      <TextInput
        placeholder="Date"
        autoCapitalize="none"
        editable={true}
        onChangeText={value => {
          setDate(value);
        }}
        style={styles.input}
      />   
      <TouchableOpacity style={styles.done} onPress={addSlot}>
          <Text style={styles.doneText}>Add Slot</Text>
        </TouchableOpacity> 
    </View>
    
  );
};

export default AddSlot;

const styles=StyleSheet.create({
  input: {
    borderWidth: 1.5,
    borderRadius: 10,
    width: '60%',
    marginBottom: 18,
    textAlign: 'center',
    borderColor: '#009387',
    marginTop: 14,
  },
  inputContainer: {
    alignItems: 'center',
    flex: 1,
    //justifyContent:"center"
    marginTop:70
  },
  done: {
    backgroundColor: '#009387',
    width: '70%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 25,
  },
  doneText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
})