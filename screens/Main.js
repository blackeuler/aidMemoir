import React from 'react';
import { StyleSheet, Text, ScrollView, SectionList, View, Button } from 'react-native';
import { ListItem } from 'react-native-elements'

const list = [
    {
      title: 'How To Instructions',
      icon: 'school',
      path: 'HowTo'
    },
    {
        title: 'Calendar',
        icon: 'today',
        path: 'Calendar'
    },
    {
        title: 'Agenda',
        icon: 'toc',
        path: 'Agenda'
    },
    

]
 export default class HomeScreen extends React.Component {
  
  render() {
    return (
      <ScrollView >
        <Text style={styles.baseText}>Hello! What are you looking for today?</Text>
        
        <View>
  {
    list.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        leftIcon={{ name: item.icon }}
        onPress={() => this.props.navigation.navigate(item.path)}
        chevronColor="powderblue"
        chevron
        titleStyle={{  fontWeight: 'bold' }}
      />
    ))
  }
</View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 4,
    
    
  },
  baseText: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 25,
    paddingBottom: 2,
  },
  sectionHeader: {
    paddingTop: 2,
    textAlign: 'center',
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});