import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
export default class HowToCard extends React.Component {
    
      
  render() {
    return (
      
        <View style={ {flex:1}} >
             <Card
        title={this.props.title}
        image={{uri:this.props.image}}>
        
        <Text style={{marginBottom: 10}}>
        {this.props.description}
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='powderblue'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Learn Now' />
      </Card> 
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