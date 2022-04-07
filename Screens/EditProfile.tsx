import React from 'react'; 
import { StyleSheet, Text, View, Button } from 'react-native'; 

export default class EditProfile extends React.Component { 
    
    render () { 
        return ( 
            <View style={styles.container}> 
                <Text style={styles.text}>Screen EditProfile</Text> 
                <Button title='drawer' onPress={() => this.props.navigation.toggleDrawer() } />
            </View> 
        ); 
    } 
} 

const styles = StyleSheet.create({ 
    container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', 
    }, 
    text: { 
    fontSize: 20, 
    color: '#000', 
    }, 
});