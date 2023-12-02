import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Pressable, Image, Alert} from 'react-native';
import {mainStyles} from '../asset/style/mainStyle';
import parkings from '../asset/data/ParkingDetail.json';

const DetailScreen = ({navigation, route}) => {
  const {parkingId} = route.params;
  const selectedParking = parkings.find(parking => parking.id === parkingId);

  const handleTextSubmit = () => {
    // Perform any additional logic before showing the alert
    Alert.alert(
      'Your Parking has been reserved',
      `Location: ${selectedParking.address}`,
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigate back to the home page after the user clicks OK
            navigation.navigate('Home'); // Replace 'Home' with the name of your home screen
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={mainStyles.sectionContainer}>
      <View style={mainStyles.cardItem}>
        <Text style={mainStyles.sectionTitle}>Reservation Summary</Text>
        <Text style={mainStyles.sectionSubTitle}>
          {selectedParking.address}
        </Text>
        <Text style={mainStyles.sectionDescription}>
          Price: ${selectedParking.price}/hour
        </Text>
        <Text style={mainStyles.sectionDescription}>
          Available Spots: {selectedParking.free}
        </Text>
        <Text style={mainStyles.sectionDescription}>
          Rating: {selectedParking.rating}
        </Text>
        <View style={{alignItems: 'center', margin: 20}}>
          <Image
            source={{uri: selectedParking.image}}
            style={mainStyles.spotImage}
          />
        </View>
        <Pressable
          onPress={handleTextSubmit}
          style={({pressed}) => [
            {backgroundColor: pressed ? '#00A86B' : '#08C068'},
            mainStyles.btnStyles,
          ]}>
          <Text style={mainStyles.btnText}>Reserve Parking</Text>
        </Pressable>
      </View>

      <Text style={mainStyles.sectionSubTitle}>Menu</Text>
      <Pressable
        onPress={() => navigation.goBack()}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#00A86B' : '#08C068'},
          mainStyles.btnStyles,
        ]}>
        <Text style={mainStyles.btnText}>Go Back</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.popToTop()}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#00A86B' : '#08C068'},
          mainStyles.btnStyles,
        ]}>
        <Text style={mainStyles.btnText}>Go Homepage</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default DetailScreen;
