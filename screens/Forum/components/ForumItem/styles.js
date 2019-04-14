import { StyleSheet } from 'react-native';
import Colors from '../../../../core/constants/colors';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    margin: 1,
    minHeight: 100,
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
  }
});

export default styles;
