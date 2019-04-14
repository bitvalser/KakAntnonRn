import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: -40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    authInputs: {
      width: '50%'
    },
    header: {
      fontSize: 40,
      fontWeight: 'bold'
    },
    subHeader: {
      marginBottom: 30
    },
    register: {
      width: '50%',
      backgroundColor: '#5700B3',
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      marginTop: 5
    },
    registerText: {
      fontWeight: 'bold',
      color: '#fff'
    },
    login: {
      width: '50%',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#D53561',
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      marginTop: 5
    },
    loginText: {
      fontWeight: 'bold',
      color: '#D53561'
    },
    loading: {
      marginBottom: 30
    }
  });

  export default styles;
  