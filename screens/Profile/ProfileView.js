import React from 'react';
import ProifleCard from '../../core/components/ProfileCard/index';
import Achive from '../../core/components/Achive/index';
import { Alert, View, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import Colors from '../../core/constants/colors';

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.navigation.setParams({ logOut: this.logOut });
    this.props.loadAchives();
  }
  logOut = () => {
    Alert.alert(
      'Logout ',
      'Do you really want to leave?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel'
        },
        { text: 'Yes', onPress: () => this.props.logout() }
      ],
      { cancelable: false }
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.user ? (
          <View style={styles.cardWrapper}>
            <ProifleCard user={this.props.user} />
          </View>
        ) : null}
        <Text style={styles.h2}>Достижения</Text>
        {this.props.achives && this.props.achives.length !== 0 ? (
          <View>
            <FlatList
              data={this.props.achives}
              keyExtractor={(item, index) => `achives${index}`}
              renderItem={({ item }) => <Achive achive={item.achives} />}
            />
          </View>
        ) : !this.props.isAchiveLoad ? (
          <Text>У вас нет достижений</Text>
        ) : (
          <ActivityIndicator color={Colors.tintColor} />
        )}
      </View>
    );
  }
}

export default ProfileView;
