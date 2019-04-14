import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 2,
    borderRadius: 20,
    padding: 2,
    backgroundColor: '#2C2827',
    borderWidth: 1,
    borderColor: '#5B6260',
    minWidth: 250
  },
  icon: {
    width: 32,
    height: 32,
    margin: 4,
    tintColor: '#fff'
  },
  header: {
    color: '#fff',
    fontWeight: 'bold'
  },
  description: {
    color: '#fff'
  }
});

export default styles;
