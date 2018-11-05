
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import HomeScreen from './screens/Main'
import Header from './Components/Header'
import HowTo from './screens/How-to'
import { ThemeProvider } from 'react-native-elements';


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