import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ProfileCardComponent = ({ user }) => (
  <View style={styles.profileCard}>
    <View style={styles.dataWrapper}>
      <Text style={styles.nameText}>
        {user.email}
      </Text>
      <Text style={styles.subTitleText}>{user.role.name}</Text>
    </View>
  </View>
);

export default ProfileCardComponent;
