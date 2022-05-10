import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';

const CancelAppointment = props => {
  const {navigation} = props;

  console.log(props);

  const [reason, setReason] = React.useState('');

  const cancelSlot = () => {
    console.log('called');
  };

  return (
    <View>
      <Text>cancelAppointment</Text>
      <TextInput
        placeholder="Enter Reason"
        onChangeText={text => setReason(text)}
      />
      <Button title="cancel" onPress={cancelSlot} />
      <Button title="Back" onPress={() => navigation.navigate('Your Appointments')} />
    </View>
  );
};

export default CancelAppointment;
