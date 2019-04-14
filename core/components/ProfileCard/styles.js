import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  nameText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    elevation: Platform.OS === 'ios' ? 1 : 8,
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1.0
  },
  subTitleText: {
    textAlign: 'center'
  }
});

export default styles;
