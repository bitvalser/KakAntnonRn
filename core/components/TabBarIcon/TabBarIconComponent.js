import React from 'react';
import { Image } from 'react-native';
import Icons from '../../constants/icons';
import styles from './styles';

class TabBarIconComponent extends React.Component {
  render() {
    return (
      <Image
        style={{
          ...styles.icon,
          ...(this.props.focused ? styles.tint : {})
        }}
        source={Icons[this.props.name]}
      />
    );
  }
}

export default TabBarIconComponent;
