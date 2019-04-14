import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icons from '../../constants/icons';
import styles from './styles';

const ClickableIconComponent = ({ onPress, name }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={Icons[name]} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default ClickableIconComponent;
