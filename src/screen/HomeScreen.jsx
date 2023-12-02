import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, TextInput, Pressable} from 'react-native';
import {mainStyles} from '../asset/style/mainStyle';

const HomeScreen = ({navigation}) => {
  const [taskText, setTaskText] = useState('');

  return (
    <SafeAreaView style={mainStyles.sectionContainer}>
      <Text style={mainStyles.sectionTitle}>
        Find Parking in Calgary Downtown
      </Text>
      <Text style={mainStyles.sectionDescription}>Enter your location:</Text>
      <TextInput
        style={mainStyles.input}
        placeholder="e.g., Downtown Calgary"
        onChangeText={text => setTaskText(text)}
        value={taskText}
      />
      <Pressable
        onPress={() => navigation.navigate('map')}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#00A86B' : '#08C068'},
          mainStyles.btnStyles
        ]}>
        <Text style={mainStyles.btnText}>SEARCH</Text>
      </Pressable>


      {/* <Button 
        title="Go to Contact"
        onPress={ ()=> navigation.navigate('Contact') }/> */}
      {/* <Button 
        title="Change Title!"
        onPress={ ()=> navigation.setOptions({ title: "My Even App!" }) }/> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
