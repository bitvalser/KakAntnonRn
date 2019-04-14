import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Icons from '../../constants/icons';

const FabView = ({ onPress, name, position }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.fab, ...position}}>
      <Image style={styles.fabIcon} source={Icons[name]} />
    </TouchableOpacity>
  );
};

export default FabView;
