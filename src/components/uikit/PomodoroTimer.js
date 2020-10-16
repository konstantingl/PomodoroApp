import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Input } from 'react-native-elements';
import Constants from 'expo-constants';

import Counter from './Counter'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class PomodoroTimer extends Component {

  state = {
    workTime: 2,
    relaxTime: 1,
    intervalType: 'work',
  }

  handleTimerCompleted = () => {
    if (this.state.intervalType == 'work'){
      this.setState({intervalType: 'relax'})
    } else {
      this.setState({intervalType: 'work'})
    }
  }

  hanldeWorkTime = (text) =>{
      if (text>=0) {
        this.setState({workTime: text})
      } else {
        alert ('Invalid time!')
        this.setState({workTime: 2})
      }
  }

  hanldeRelaxTime = (text) =>{
      if (text>=0) {
        this.setState({relaxTime: text})
      } else {
        alert ('Invalid time!')
        this.setState({relaxTime: 1})
      }
  }

  handleTime = () => {
    if (this.state.intervalType == 'work') {
      console.log('work time return', this.state.workTime);
      return this.state.workTime
    } else {
      console.log('relax time return', this.state.relaxTime);
      return this.state.relaxTime
    }
  }


  render() {
    var time = this.handleTime()
    return (
      console.log('rendered'),
      <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.inputs}>
        <Input label='Work time' keyboardType={"numeric"} defaultValue = {this.state.workTime} onChangeText = {this.hanldeWorkTime} />
        <Input label='Relax time' keyboardType={"numeric"} defaultValue = {this.state.relaxTime} onChangeText = {this.hanldeRelaxTime} />
      </View>
        <Counter counterNum={time}
                 onComplete={this.handleTimerCompleted}
                 intervalType={this.state.intervalType}
         />
      </View>
      </DismissKeyboard>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
    inputs: {
  }
});
