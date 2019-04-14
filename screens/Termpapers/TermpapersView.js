import React from 'react';
import Termpaper from './components/Termpaper/index';
import { ScrollView, RefreshControl, FlatList, View } from 'react-native';
import styles from './styles';
import Fab from '../../core/components/Fab/index';
import CreateModal from '../../core/components/CreateModal/index';
import Roles from '../../core/constants/roles';

class TermpapersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  takeTp = theme => {
    this.props.takeTermpaper(theme);
  };
  updateTermpapers = () => {
    this.props.loadTermpapers();
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
  createTermpaper = state => {
    this.props.createTermpaper(state.title, state.description);
  };
  componentDidMount() {
    this.props.loadTermpapers();
  }
  render() {
    return (
      <View style={styles.contentWrapper}>
        <ScrollView
          style={styles.container}
          refreshControl={<RefreshControl refreshing={this.props.isLoading} onRefresh={this.updateTermpapers} />}
        >
          <FlatList
            data={this.props.termpapers}
            keyExtractor={(item, index) => `termapapers${index}`}
            renderItem={({ item }) => <Termpaper termpaper={item} takeTp={this.takeTp} />}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        </ScrollView>
        {this.props.role && this.props.role.name === Roles.Lecturer ? (
          <View>
            <Fab onPress={this.openModal} name="add" position={{ bottom: 10, right: 10 }} />
            <CreateModal
              closeModal={this.closeModal}
              modalVisible={this.state.modalVisible}
              save={this.createTermpaper}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

export default TermpapersView;
