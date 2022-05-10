import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';

import { DrawerContent } from './src/screens/DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from './src/components/context';

import MainTabScreen from './src/screens/MainTabScreen';
import SupportScreen from './src/screens/SupportScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import BookAppointment from './src/screens/BookAppointment';

import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPassword from './src/screens/ForgotPassword';

import ConsultantHomeScreen from './src/screens/ConsultantScreens/ConsultantHomeScreen';
import ConsultantProfileScreen from './src/screens/ConsultantScreens/ConsultantProfileScreen';
import { ConsultantDrawerContent } from './src/screens/ConsultantScreens/ConsultantDrawerContent';
import ConsultantSignInScreen from './src/screens/ConsultantScreens/ConsultantSignInScreen';
import AddSlot from './src/screens/ConsultantScreens/AddSlot';
import CancelAppointment from './src/screens/ConsultantScreens/CancelAppointment';

const Drawer = createDrawerNavigator();

const RootStack = createStackNavigator();

const Authentication = (props) => {

  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}
    drawerContent={props => <DrawerContent {...props} />}>   
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen}  />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="BookAppointment" component={BookAppointment} />
    </Drawer.Navigator>
  )
}

const RootScreen = (props) => {
  return (
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
      </RootStack.Navigator>
  )
}

const ConsultantRootScreen = (props) => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true,headerTintColor:"#009387" }}
    drawerContent={props => <ConsultantDrawerContent {...props} />}>   
        <Drawer.Screen name="Your Appointments" component={ConsultantHomeScreen}  />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="ConsultantProfileScreen" component={ConsultantProfileScreen} />
        <Drawer.Screen name="AddSlot" component={AddSlot} />
        <Drawer.Screen name="CancelAppointment" component={CancelAppointment} />
    </Drawer.Navigator>
  )
}


const ConsultantAuth = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="ConsultantSignInScreen" component={ConsultantSignInScreen} />
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </RootStack.Navigator>
  )
}


const App = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const [loginState, setLoginState] = useState(false);
 
  const [isConsultant, setIsConsultant] = useState(false);

  const [consultantLogin, setConsultantLogin] = useState(false);

  const authContext = React.useMemo( () => ({
    signIn: async () => {
      try{
        setLoginState(true);
      }catch(e){
        console.log(e);
      }
    },
    logout: async () => {
      try{
        setLoginState(false);
      }catch(e){
        console.log(e);
      }
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    },
    consultantSignIn: async (flag) => {
      try{
        setConsultantLogin(flag);
      }catch(e){
        console.log(e);
      }
    },
    isConsultantCheck : async (flag) => {
      try{
        setIsConsultant(flag)
      }catch(e){
        console.log(e);
      }
    }
  }), []);


  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
            {
              !isConsultant ? 
                !loginState ? (
                  <RootScreen/>
                )
                  :(
                    <Authentication/>
                )
              :
                !consultantLogin ? (
                  <ConsultantAuth/>
                )
                  :(
                  <ConsultantRootScreen/>
                )
              
            }
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

export default App