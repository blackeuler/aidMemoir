
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Calendar, Agenda } from 'react-native-calendars';
import HomeScreen from './screens/Main'
import Header from './Components/Header'
import HowTo from './screens/How-to'
import Contacts from './screens/Contacts'
import Instructions from './Components/Instructions/Instructions'
import ContactCard from './Components/ContactCard'


const theme = {
  colors: {
    primary: 'pink',
  },
};


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Calendar: Calendar,
    Agenda:Agenda,
    HowTo:HowTo,
    Contact:Contacts,
    Instruction:Instructions,
    ContactC:ContactCard,
    
    
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitle:<Header/>,
      headerStyle: {
        backgroundColor: 'powderblue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return(
     
    <RootStack />
    
    
    );
  }
}