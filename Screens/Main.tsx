import React from 'react'; 
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'; 

export default class Main extends React.Component { 

    render () { 
        return ( 
            <View style={styles.container}> 
                <TouchableOpacity onPress={() => alert('Hello Jason')} style={styles.button}> 
                <Text style={styles.buttonText}>Hi Mauricio</Text> 
                </TouchableOpacity> 
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
    button: { 
    backgroundColor: 'blue', 
    padding: 20, 
    borderRadius: 5, 
    }, 
    buttonText: { 
    fontSize: 20, 
    color: '#fff', 
    },  
});