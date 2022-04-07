import React from 'react'; 
import { View, Button, Text, Thumbnail } from 'native-base'; // *** UNCOMMENT THIS
// import { Text, View } from 'react-native'; // *** COMMENT THIS OUT

export default class SignIn extends React.Component { 
    
  static navigationOptions = {
    headerTitle: 'SignIn page',
  };

  render () { 
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    
    return ( 
      <View> 
        <Text>Screen SignIn</Text> 
        <Thumbnail square large source={{uri: uri}} />

        <Button Primary onPress={() => this.props.navigation.navigate('MainStack') } >
          <Text>sign in</Text>
        </Button>
        
        <Button Light onPress={() => this.props.navigation.navigate('Register') } >
          <Text>register</Text>
        </Button>

        <Button transparent Dark onPress={() => this.props.navigation.navigate('ForgotPassword') } >
          <Text>forgot password</Text>
        </Button>

      </View> 
    ); 
  } 
} 
