import { StyleSheet } from 'react-native';
import Colors from '../../../../core/constants/colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    minHeight: 150,
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    backgroundColor: '#fff'
  },
  dataWrapper: {
    margin: 5
  },
  header: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff'
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 2
  },
  description: {},
  themeWrapper: {
    backgroundColor: Colors.tintColor,
    padding: 10
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    margin: 10
  },
  button: {
    backgroundColor: '#5700B3',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    right: 5
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff'
  },
  date: {
    margin: 8,
    marginLeft: 0,
    color: 'grey'
  },
  warn: {
    color: 'red',
    fontSize: 19,
    position: 'absolute',
    right: 20
  }
});

export default styles;
