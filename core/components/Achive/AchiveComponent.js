import React from 'react';
import { View, Text, Image } from 'react-native';
import Icons from '../../../core/constants/icons';
import styles from './styles';

const AchiveComponent = ({ achive }) => {
  const { title, description } = achive;
  return (
    <View style={styles.container}>
      <Image source={Icons['achivments']} style={styles.icon} />
      <View>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default AchiveComponent;
