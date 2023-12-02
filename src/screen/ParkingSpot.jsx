import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Button, Pressable} from 'react-native';
import {mainStyles} from '../asset/style/mainStyle';
import parkings from '../asset/data//ParkingDetail.json';

const ParkingSpot = ({navigation}) => {
  return (
    <SafeAreaView style={mainStyles.sectionContainer}>
      <Text style={mainStyles.sectionTitle}>
        Parking Spots in Downtown Calgary
      </Text>
      <View>
        {parkings.map(parking => (
          <View key={parking.id} style={mainStyles.cardItem}>
            <Text style={mainStyles.sectionSubTitle}>{parking.title}</Text>
            <Text style={mainStyles.sectionDescription}>
              Price: ${parking.price}/hour
            </Text>
            <Text style={mainStyles.sectionDescription}>
              Available: {parking.spots} spots
            </Text>
            <Text style={mainStyles.sectionDescription}>
              Rating: {parking.rating}
            </Text>

            <Pressable
              onPress={() =>
                navigation.navigate('detail', {parkingId: parking.id})
              }
              style={({pressed}) => [
                {backgroundColor: pressed ? '#00A86B' : '#08C068'},
                mainStyles.btnStyles,
              ]}>
              <Text style={mainStyles.btnText}>View Detail</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ParkingSpot;

{
  /* <Text style={mainStyles.sectionDescription}>
                This app is used for testing
            </Text>
            <Button title="Go to About.... again!" onPress={ () => navigation.navigate('About') } />
            <Button title="Go to Contact!" onPress={ () => navigation.navigate('Contact') } /> */
}
