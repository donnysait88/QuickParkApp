import {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {mainStyles} from '../asset/style/mainStyle';
import parkings from '../asset/data/ParkingDetail.json';
import MapView, {Marker} from 'react-native-maps';

const MapScreen = ({navigation}) => {
  
  const [hours, setHours] = useState({});
  const [active, setActive] = useState(null);

  useEffect(() => {
    const initializeHours = () => {
      const hoursData = {};
      parkings.forEach(parking => {
        hoursData[parking.id] = 5;
      });
      setHours(hoursData);
    };

    initializeHours();
  }, []);

  const renderParking = ({item}) => {
    return (
      <Pressable key={`parking-${item.id}`} onPress={() => setActive(item.id)}>
        
        <View style={[mainStyles.parkingCard, mainStyles.shadow, { width: '85%' }]}>

          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={{fontSize: 16, fontWeight: 600}}>
              {' '}
              x{item.spots} {item.title}
            </Text>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 70,
                  borderRadius: 6,
                  borderColor: 'grey',
                  borderWidth: 0.5,
                  padding: 4,
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text style={{fontSize: 16, fontWeight: 600, padding: 5}}>
                  05:00
                </Text>
              </View>
              <Text style={{fontSize: 16, fontWeight: 600, paddingLeft: 6,marginTop: 5,}}>
                hrs
              </Text>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>

            <View style={{flex: 0.75, justifyContent: 'center', paddingLeft: 15, paddingRight: 15, marginLeft: 32}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{paddingLeft: 6}}>🔖${item.price}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{paddingLeft: 6}}>⭐{item.rating}</Text>
              </View>
            </View>

            <TouchableOpacity 
              style={mainStyles.buy}
              onPress={() =>
                navigation.navigate('detail', {parkingId: item.id})
              }
            >
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 400,
                    color: 'white',
                  }}>
                  ${item.price * hours[item.id]}
                </Text>
                <Text style={{color: 'white'}}>
                  ${item.price}x{hours[item.id]} hrs
                </Text>
              </View>
              <View
                style={{
                  flex: 0.25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 25, color: 'white'}}>{'>'}</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </Pressable>
    );
  };

  const renderParkings = () => {
    return (
      <ScrollView
        style={mainStyles.parkings}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {parkings.map(parking => renderParking({item: parking}))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={mainStyles.container}>
      <View>
        <MapView
          initialRegion={{
            latitude: 51.04731,
            longitude: -114.057968,
            latitudeDelta: 0.04458,
            longitudeDelta: 0.0015,
          }}
          scrollEnabled={true}
          zoomEnabled={true}
          style={mainStyles.map}>
          {parkings.map(parking => (
            <Marker
              key={`marker-${parking.id}`}
              coordinate={parking.coordinate}>
              <Pressable onPress={() => setActive(parking.id)}>
                <View
                  style={[
                    mainStyles.marker,
                    mainStyles.shadow,
                    active === parking.id ? mainStyles.active : null,
                  ]}>
                  <Text style={{color: '#C41E3A', fontWeight: 600}}>
                    ${parking.price}
                  </Text>
                  <Text style={mainStyles.markerStatus}>
                    {' '}
                    ({parking.free}/{parking.spots})
                  </Text>
                </View>
              </Pressable>
            </Marker>
          ))}
        </MapView>
        {renderParkings()}
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
