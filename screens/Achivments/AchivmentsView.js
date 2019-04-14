import React from 'react';
import Achive from '../../core/components/Achive/index';
import { View, ScrollView, FlatList, RefreshControl, ActivityIndicator, Text } from 'react-native';
import styles from './styles';
import Colors from '../../core/constants/colors';
import Fab from '../../core/components/Fab/index';
import CreateModal from '../../core/components/CreateModal/index';
import Roles from '../../core/constants/roles';

class AchivmentsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  updateAchives = () => {
    this.props.loadAchives();
  };
  openModal = () => {
    this.setState({
      modalVisible: true
    });
  };
  closeModal = () => {
    this.setState({
      modalVisible: false
    });
  };
  createAchive = state => {
    this.props.createAchive(state.title, state.description);
  };
  componentDidMount() {
    this.props.loadAchives();
  }
  render() {
    return (
      <View style={styles.contentWrapper}>
        <ScrollView
          style={styles.container}
          refreshControl={<RefreshControl refreshing={this.props.isLoading} onRefresh={this.updateAchives} />}
        >
          {this.props.isLoading ? (
            <ActivityIndicator color={Colors.tintColor} />
          ) : (
            <View style={styles.achivesWrapper}>
              <FlatList
                data={this.props.achives}
                keyExtractor={(item, index) => `achivesAll${index}`}
                renderItem={({ item }) => <Achive achive={item} />}
                contentContainerStyle={{ paddingBottom: 80 }}
              />
            </View>
          )}
        </ScrollView>
        {this.props.role && this.props.role.name === Roles.Lecturer ? (
          <View>
            <Fab onPress={this.openModal} name="add" position={{ bottom: 10, right: 10 }} />
            <CreateModal closeModal={this.closeModal} modalVisible={this.state.modalVisible} save={this.createAchive} />
          </View>
        ) : null}
      </View>
    );
  }
}

export default AchivmentsView;
