// import React from 'react';

// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Icon from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import HomeScreen from './HomeScreen';
// import YourAppointments from './YourAppointments';
// import ProfileScreen from './ProfileScreen';
// import SettingsScreen from './SettingsScreen';
// import SupportScreen from './SupportScreen';
// import BookAppointment from './BookAppointment';

// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();
// const ProfileStack = createStackNavigator();
// const SettingStack = createStackNavigator();
// const SupportStack = createStackNavigator();

// const Tab = createBottomTabNavigator();

// const MainTabScreen = () => (
//   <Tab.Navigator
//     screenOptions={({route}) => ({
//       tabBarIcon: ({focused, color, size}) => {
//         let iconName;
//         if (route.name === 'Home') {
//           iconName = focused ? 'home' : 'home';
//         } else if (route.name === 'Appointments') {
//           iconName = focused ? 'bookmark' : 'bookmark';
//           return <FontAwesome5 name={iconName} size={20} color={color} />;
//         }
//         return <FontAwesome5 name={iconName} size={20} color={color} />;
//       },
//       tabBarActiveTintColor: '#fff',
//       tabBarInactiveTintColor: 'gray',
//       tabBarActiveBackgroundColor: '#009387',
//       headerShown: false,
//       tabBarStyle: {
//         position: 'absolute',
//         right: 20,
//         left: 20,
//         bottom: 15,
//         elevation: 0,
//         backgroundColor: 'lightblue',
//         borderRadius: 60,
//         height: 50,
//       },
//     })}>
//     <Tab.Screen name="Home" component={HomeStackScreen} />
//     <Tab.Screen name="Appointments" component={DetailsStackScreen} />
//     <Tab.Screen
//       name="Profile"
//       component={ProfileStackScreen}
//       options={{
//         tabBarButton: () => null,
//         tabBarVisible: false,
//       }}
//     />
//     <Tab.Screen
//       name="Settings"
//       component={SettingStackScreen}
//       options={{
//         tabBarButton: () => null,
//         tabBarVisible: false,
//       }}
//     />
//     <Tab.Screen
//       name="Support"
//       component={SupportStackScreen}
//       options={{
//         tabBarButton: () => null,
//         tabBarVisible: false,
//       }}
//     />
//   </Tab.Navigator>
// );

// export default MainTabScreen;

// const HomeStackScreen = ({navigation}) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <HomeStack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         title: 'Home',
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#009387"
//             onPress={() => navigation.openDrawer()}></Icon.Button>
//         ),
//       }}
//     />
//   </HomeStack.Navigator>
// );

// const DetailsStackScreen = ({navigation}) => (
//   <DetailsStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <DetailsStack.Screen
//       name="Your Appointments"
//       component={YourAppointments}
//       options={{
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#009387"
//             onPress={() => navigation.openDrawer()}></Icon.Button>
//         ),
//       }}
//     />
//   </DetailsStack.Navigator>
// );

// const ProfileStackScreen = ({navigation}) => (
//   <ProfileStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <ProfileStack.Screen
//       name="Profile"
//       component={ProfileScreen}
//       options={{
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#009387"
//             onPress={() => navigation.openDrawer()}></Icon.Button>
//         ),
//       }}
//     />
//   </ProfileStack.Navigator>
// );

// const SettingStackScreen = ({navigation}) => (
//   <SettingStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <SettingStack.Screen
//       name="Settings"
//       component={SettingsScreen}
//       options={{
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#009387"
//             onPress={() => navigation.openDrawer()}></Icon.Button>
//         ),
//       }}
//     />
//   </SettingStack.Navigator>
// );


// const SupportStackScreen = ({navigation}) => (
//   <SupportStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#009387',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <SupportStack.Screen
//       name="Support"
//       component={SupportScreen}
//       options={{
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#009387"
//             onPress={() => navigation.openDrawer()}></Icon.Button>
//         ),
//       }}
//     />
//   </SupportStack.Navigator>
// );


import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './HomeScreen';
import YourAppointments from './YourAppointments';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import SupportScreen from './SupportScreen';
import BookAppointment from './BookAppointment';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();
const SupportStack = createStackNavigator();

const Tab = createBottomTabNavigator();


const MainTabScreen = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Appointments') {
          iconName = focused ? 'bookmark' : 'bookmark';
          return <FontAwesome5 name={iconName} size={focused?20:15} color={color} />;
        }
        return <FontAwesome5 name={iconName} size={focused?20:15} color={color} />;
      },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: 'gray',
      tabBarActiveBackgroundColor: '#009387',
      headerShown: false,
      tabBarStyle: {
        // position: 'absolute',
        // right: 20,
        // left: 20,
        // bottom: 15,
        // elevation: 0,
        // backgroundColor: 'lightblue',
        height: 45,
        
        borderTopColor:"#01ab9d30",
        borderBottomEndRadius:20
      
      },
    })}>
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Appointments" component={DetailsStackScreen} />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarButton: () => null,
        tabBarVisible: false,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingStackScreen}
      options={{
        tabBarButton: () => null,
        tabBarVisible: false,
      }}
    />
    <Tab.Screen
      name="Support"
      component={SupportStackScreen}
      options={{
        tabBarButton: () => null,
        tabBarVisible: false,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Your Appointments"
      component={YourAppointments}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const SettingStackScreen = ({navigation}) => (
  <SettingStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <SettingStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </SettingStack.Navigator>
);


const SupportStackScreen = ({navigation}) => (
  <SupportStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <SupportStack.Screen
      name="Support"
      component={SupportScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </SupportStack.Navigator>
);