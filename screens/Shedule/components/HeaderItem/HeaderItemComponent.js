import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const SubjectItemComponent = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default SubjectItemComponent;
