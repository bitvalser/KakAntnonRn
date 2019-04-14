import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const SubjectItemComponent = ({ data }) => {
  const { groups } = data;
  return (
    <View style={styles.container}>
      {groups.map(subject => (
        <View style={styles.subject}>
          <Text style={styles.name}>{subject.name}</Text>
          <Text>{subject.teacher}</Text>
          <Text style={styles.room}>{subject.room}</Text>
        </View>
      ))}
    </View>
  );
};

export default SubjectItemComponent;
