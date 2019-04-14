import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class TextInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }
  onFocus = () => {
    this.setState({ focus: true });
  };
  onBlur = () => {
    this.setState({ focus: false });
  };
  render() {
    return (
      <TextInput
        style={{
          ...styles.input,
          ...(this.state.focus ? styles.inputFocus : {}),
          ...(this.props.height ? { height: this.props.height, textAlignVertical: 'top' } : {})
        }}
        onChangeText={this.props.onChangeText}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        placeholder={this.props.placeholder}
        placeholderTextColor="#ADADAD"
        selectionColor="black"
        multiline={this.props.multiline ? this.props.multiline : false}
        value={this.props.value}
        secureTextEntry={this.props.type === 'password'}
      />
    );
  }
}

TextInputComponent.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.value
};

export default TextInputComponent;
