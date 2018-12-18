import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Video} from 'expo';

export default class Instructions extends React.Component {
    
    render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'NO-ID');
    const video = navigation.getParam('video', 'some default value');
      return (
        <ScrollView>
        <Video
            source={{ uri: `${video}` }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: 400, height: 300 }}
        />
        <Text>{title}</Text>
    </ScrollView>
      );
    }
  }

