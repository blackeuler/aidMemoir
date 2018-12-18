import React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'


export default class Contacts extends React.Component {
    
      
    render() {
        const Contacts = [
            {
               Name: 'Michael Jackson',
               Number: '890-900-8762',
               Photo:"http://cdn.hdpornpictures.com/2017-08-16/474864_07.jpg",
               Relationship:"Hero",
               Birthday:"04/15/87",

            },
            {
                Name: 'Michael Jackson',
                Number: '890-900-8762',
                Photo:"http://cdn.hdpornpictures.com/2017-08-16/474864_07.jpg",
                Relationship:"Hero",
                Birthday:"04/15/87",
 
             },
             {
                Name: 'Michael Jackson',
                Number: '890-900-8762',
                Photo:"http://cdn.hdpornpictures.com/2017-08-16/474864_07.jpg",
                Relationship:"Hero",
                Birthday:"04/15/87",
 
             },
             {
                Name: 'Michael Jackson',
                Number: '890-900-8762',
                Photo:"http://cdn.hdpornpictures.com/2017-08-16/474864_07.jpg",
                Relationship:"Hero",
                Birthday:"04/15/87",
 
             },
             {
                Name: 'Michael Jackson',
                Number: '890-900-8762',
                Photo:"http://cdn.hdpornpictures.com/2017-08-16/474864_07.jpg",
                Relationship:"Hero",
                Birthday:"04/15/87",
 
             },]
      return ( 
        <Card containerStyle={{padding: 0}} >
        {
          Contacts.map((u, i) => {
            return (
              <ListItem
                key={i}
                roundAvatar
                title={u.Name}
                avatar={{uri:u.Photo}}
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    this.props.navigation.navigate('ContactC', {
                      video: `${this.props.video}`,
                      title:`${this.props.title}`,
                    });
                  }}
              />
            );
          })                          
        }
        </Card>
      );
    }
  }