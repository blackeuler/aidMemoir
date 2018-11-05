import React from 'react';
import { StyleSheet, Text, ScrollView, SectionList, Image, Button } from 'react-native';
import { Contacts } from 'expo';


 export default class HomeScreen extends React.Component {
  
  render() {
    return (
      <ScrollView >
        <Text style={styles.baseText}>Hello! What are you looking for today?</Text>
        <SectionList
          sections={[
            {title: 'Frequently Used', data: ['HowtoInstructions','Calendar','Agenda','Alarm Clock','Contacts']},
          ]}
          renderItem={({item}) => <Button onPress={() => this.props.navigation.navigate(item)} title={item} style={styles.item}></Button>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
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