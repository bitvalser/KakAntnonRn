/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 3,
    borderRadius: 2,
    borderWidth: 0.5,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
    maxWidth: 400,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderColor: '#d1d1d1',
    flexDirection: 'row',
    padding: 10,
    minHeight: 300,
    zIndex: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 10,
    shadowOpacity: 1
  },
  modalBackground: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  inputs: {
    width: '80%'
  },
  saveWrapper: {
    marginTop: 25,
    width: '100%',
    alignItems: 'center'
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 8
  },
  button: {
    backgroundColor: '#5700B3',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff'
  },
});

export default styles;
