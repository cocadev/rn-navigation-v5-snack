import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Screens/SignIn';
import Register from './Screens/Register';
import ForgotPassword from './Screens/ForgotPassword';
import ResetPassword from './Screens/ResetPassword';
import EditProfile from './Screens/EditProfile';
import Main from './Screens/Main';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  state = {
    isReady: false,
    user: null,
  };

  async fontLoading() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.fontLoading()}
          onError={console.warn}
        />
      );
    } else {
      return (
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      );
    }
  }

  async _cacheResourcesAsync() {
    return true;
  }
}
const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="AuthStack" headerMode='none'>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="ResetPasswordStack" component={ResetPasswordStack} />
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='SignIn'>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

function ResetPasswordStack() {
  return (
    <Stack.Navigator initialRouteName='ResetPassword'>
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}

const CustomDrawerContent = (props) => ( // *** THIS IS NOT WORKING
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <DrawerItem
      label="Sign Out"
      onPress={() => props.navigation.navigate('SignIn')}
    />
  </DrawerContentScrollView>
);

const MainStack = () => {
  return (
      <Drawer.Navigator initialRouteName="Main" drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="EditProfile" component={EditProfile} />
      </Drawer.Navigator>
  );
};