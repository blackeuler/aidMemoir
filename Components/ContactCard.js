import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
export default class ContactCard extends React.Component {
    
      
  render() {
    return (
      <Card containerStyle={{padding: 0}} >
          {
            users.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.name}
                  avatar={u.photo}
                />
              );
            })                          
          }
      </Card>
        
        
      
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