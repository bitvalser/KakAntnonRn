import React from 'react';
import HeaderPicker from './components/HeaderPicker/index';
import HeaderItem from './components/HeaderItem/index';
import SubjectItem from './components/SubjectItem/index';
import { View, Text, SectionList } from 'react-native';
import styles from './styles';
import Shedule from './mocks/mockShedule';

class SheduleView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Расписание</Text>
        <HeaderPicker setPage={value => navigation.state.params.setPage(value)} />
      </View>
    )
  });
  constructor(props) {
    super(props);
    this.state = {
      page: Object.keys(Shedule)[0]
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({ setPage: this.setPage });
  }
  setPage = itemValue => {
    this.setState({ page: itemValue });
  };
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderSectionHeader={({ section: { title } }) => <HeaderItem name={title} />}
          renderItem={({ item, index, section }) => <SubjectItem key={index} data={item} />}
          sections={Shedule[this.state.page].days.map(item => ({
            title: item.day,
            data: item.subjects
          }))}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

export default SheduleView;
