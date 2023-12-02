import {StyleSheet} from 'react-native';

export const mainStyles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2E313F',
    marginBottom: 10,
  },
  sectionSubTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
    color: '#575A65',
  },
  sectionDescription: {
    // marginTop: 8,
    fontSize: 16,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  logoImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
    marginTop: 10,
  },
  btnStyles: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  cardItem: {
    marginTop: 20,
    borderWidth: 0.25,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#fff',
  },
  spotImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  buy: {
    flex: 1,
    backgroundColor: '#009E60',
    padding: 12,
    borderRadius: 6,
    flexDirection: 'row',
  },
  marker: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1.5,
    borderColor: '#fff',
    borderRadius: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  markerStatus: {
    color: 'grey',
  },
  active: {
    borderColor: '#C41E3A',
  },
  parkings: {
    flex: 1,
    position: 'absolute',
    right: 10,
    left: 0,
    bottom: 0,
    alignContent: 'center',
    paddingBottom: 24,
  },
  parkingCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 24,
    marginHorizontal: 28,
  },
});
