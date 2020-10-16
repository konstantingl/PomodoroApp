import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PomodoroTimer from './src/components/uikit/PomodoroTimer'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PomodoroTimer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
