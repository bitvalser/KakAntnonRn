import React from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import TextInputComponent from '../TextInput/index';
import styles from './styles';

class CreateModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }
  save = () => {
    this.props.save(this.state);
    this.closeModal();
  };
  clearState = () => {
    this.setState({
      title: '',
      description: ''
    });
  };
  closeModal = () => {
    this.clearState();
    this.props.closeModal();
  };
  onChangeTextName = value => {
    this.setState({ title: value });
  };
  onDescriptionChange = value => {
    this.setState({
      description: value
    });
  };
  render() {
    return (
      <Modal animationType="fade" transparent={true} visible={this.props.modalVisible} onRequestClose={this.closeModal}>
        <View style={styles.modalBackground}>
          <View style={styles.container} elevation={5}>
            <TouchableOpacity style={styles.closeButton} onPress={this.closeModal}>
              <Text>✕</Text>
            </TouchableOpacity>
            <View style={styles.inputs}>
              <Text>Имя</Text>
              <TextInputComponent
                onChangeText={this.onChangeTextName}
                value={this.state.name}
                placeholder="Введите имя..."
              />
              <Text>Описание</Text>
              <TextInputComponent
                onChangeText={this.onDescriptionChange}
                value={this.state.description}
                height={100}
                multiline={true}
                placeholder="Введите описание..."
              />
            <TouchableNativeFeedback onPress={this.save}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>СОЗДАТЬ</Text>
              </View>
            </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default CreateModalView;
