import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TimerHeader extends Component {
  handleDisplay = () => {
    if (this.props.isRunning && this.props.count > 0) {
      return "Work hard!"
    } else {
      return "Time out"
    }
  }

  handleInterval = () => {
    if (this.props.intervalType == 'work') {
      return 'Work time!'
    } else {
      return 'Relax time!'
    }
  }

  render () {
    var interval = this.handleInterval()
    var textShow = this.handleDisplay()
    return (
      <View>
        <Text>{interval}</Text>
        <Text>{textShow}</Text>
      </View>
    )
  }
}
