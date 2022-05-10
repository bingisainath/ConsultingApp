import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {forgetPass} from '../ServerApis/UserApis';

export default function ForgotPassword({navigation}) {
  const [Emailerror, setEmailError] = useState('');
  const [Passerror, setPassError] = useState('');
  const [validUserEmail, setValidUserEmail] = useState(true);
  const [validUserPass, setValidUserPass] = useState(true);

  const isEmailValid = email => {
    let Pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    Pattern.test(String(email).toLowerCase())
      ? setEmailError('')
      : setEmailError('Invalid Email Address');
  };

  const isPasswordValid = passwordpara => {
    let Pattern = /^[a-zA-Z].{7,10}$/;
    Pattern.test(String(passwordpara).toLowerCase())
      ? setPassError('')
      : setPassError('Invalid Password Address');
  };

  const [selectedValue, setSelectedValue] = useState('Select Country');
  const [isSelected, setSelection] = useState(false);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');

  const handlePass = val => {
    isPasswordValid(val);
    if (Passerror == '') {
      setPassword(val);
      setValidUserPass(true);
    } else {
      setValidUserPass(false);
    }
  };

  const handleEmail = val => {
    isEmailValid(val);
    if (Emailerror == '') {
      setEmail(val);
      setValidUserEmail(true);
    } else {
      setValidUserEmail(false);
    }
  };

  const setPass = () => {
    if (password === confirmPass) {
      const data = {
        email: email,
        password: password,
      };
      forgetPass(data);
      Alert.alert('Success', 'Password Changed successfully', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
        {
          text: 'Go to LogIn Page',
          onPress: () => navigation.navigate('SignInScreen'),
        },
      ]);
    } else {
      Alert.alert('Failed', 'Password Mismatch');
    }
    //console.log(email,password,confirmPass);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reset your Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={val => handleEmail(val)}
      />
      {validUserEmail ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Email error</Text>
        </Animatable.View>
      )}
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={val => handlePass(val)}
      />
      {validUserPass ? null : (
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Password error</Text>
        </Animatable.View>
      )}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={val => setConfirmPass(val)}
      />

      <TouchableOpacity style={styles.Button} onPress={setPass}>
        <Text style={styles.ButtonText}>Set Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{fontWeight: 'bold', marginTop: 40, fontSize: 15}}>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginTop: '10%',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 25,
    color: '#009387',
  },
  input: {
    borderWidth: 1,
    width: '65%',
    borderRadius: 15,
    margin: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  Button: {
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: 25,
    backgroundColor: '#009387',
    marginTop: 10,
  },
  ButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
