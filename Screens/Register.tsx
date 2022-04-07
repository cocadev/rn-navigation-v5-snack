import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native'; 

export default class Register extends React.Component { 
    
    render () { 
        return ( 
            <View style={styles.container}> 
                <Text style={styles.text}>Screen Register</Text> 
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