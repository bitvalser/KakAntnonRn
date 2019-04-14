/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: 'transparent',
        borderColor: 'rgb(40, 40, 40)',
        borderBottomWidth: 1,
        width: '100%',
        margin: 5,
        marginTop: 0,
        paddingLeft: 5,
        paddingRight: 5
    },
    inputFocus: {
        borderColor: '#5700B3',
        borderBottomWidth: 2
    }
});

export default styles;