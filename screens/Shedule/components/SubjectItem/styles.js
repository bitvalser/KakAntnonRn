import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  subject: {
    alignItems: 'center',
    flex: 1,
    padding: 3,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  name: {
    textAlign: 'center'
  },
  room: {
    fontWeight: 'bold'
  }
});

export default styles;
