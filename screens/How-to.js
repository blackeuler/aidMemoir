import React from 'react';
import HowToCard from '../Components/HowToCard'
import { StyleSheet, Text, ScrollView, SectionList, Image } from 'react-native';

export default class HowTo extends React.Component {
    
      
    render() {
        const howTos = [
            {
               title: 'Preventing Illnesses',
               image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
               description:"Wash your hands with soap and water.",

            },
            {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
 
             },]
      return (
        <ScrollView style={{ flex: 1, }}>
            {
             howTos.map((u, i) => {
                return (
                    <HowToCard
                        key={i} 
                        title = {u.title}
                        image = {u.image} 
                        description = {u.description}
                        />
                );
            })
        }
            
      </ScrollView>  
          
        
      );
    }
  }