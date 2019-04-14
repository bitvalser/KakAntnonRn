import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    backgroundColor: Colors.tintColor,
    width: 60,
    height: 60,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#fff'
  },
  fabIcon: {
    height: 36,
    width: 36,
    tintColor: '#fff'
  }
});

export default styles;
