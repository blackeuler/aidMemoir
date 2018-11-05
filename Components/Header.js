import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Font} from 'expo';
export default class Header extends React.Component {
    
      
  render() {
    return (
      
        <View style={{ height: 100, }} >
            <Text style={styles.baseText}>AidMemoir</Text>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
    baseText: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      fontSize: 25,
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });