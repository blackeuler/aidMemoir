import React from 'react';
import HowToCard from '../Components/HowToCard'
import {ScrollView} from 'react-native';

export default class HowTo extends React.Component {
    
      
    render() {
        const howTos = [
            {
               title: 'How to Brush Your Teeth',
               image: 'https://www.telegraph.co.uk/content/dam/health-fitness/2018/06/20/TELEMMGLPICT000166857393_trans_NvBQzQNjv4Bqek9vKm18v_rkIPH9w2GMNtm3NAjPW-2_OvjCiS6COCU.jpeg?imwidth=450',
               description:"Remeber twice a day :)",
               video:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"

            },
            {
                title: 'How to Clean Dishes',
                image: 'https://i.ytimg.com/vi/jgWk-Wx3ijg/maxresdefault.jpg',
                description:"Wash your hands with soap and water.",
                video:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
 
             },
             {
                title: 'How to Do Laundry',
                image: 'https://farm2.static.flickr.com/1849/29562886347_720ca60422_b.jpg',
                description:"Suds Suds Suds",
                video:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
                video:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
                video:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
                video:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
                video:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
                video:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
 
             },
             {
                title: 'Preventing Illnesses',
                image: 'https://www.wikihow.com/images/thumb/9/92/78303-8.jpg',
                description:"Wash your hands with soap and water.",
                video:"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
 
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
                        video = {u.video}
                        />
                );
            })
        }
            
      </ScrollView>  
          
        
      );
    }
  }