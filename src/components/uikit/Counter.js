import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import TimerHeader from "./TimerHeader"
import TimerDisplay from "./TimerDisplay"
import {Vibration} from 'react-native'

class Counter extends Component {

  state = {
    count: null,
    isRunning: false,
    disabled: false
  }

  componentDidMount() {
    this.setState({count: this.props.counterNum})
  }


  componentDidUpdate(prevProps) {
    if (prevProps.counterNum !== this.props.counterNum && this.state.isRunning == false) {
      this.setState({count: this.props.counterNum})
      this.handlePlay();
    }
    if (this.state.count == -1 && this.state.isRunning == true) {
      Vibration.vibrate([500, 500, 500])
      clearInterval(this.timer)
      this.props.onComplete()
      this.setState({isRunning: false})
    } else if (this.state.isRunning == false && this.state.count > 0) {
      clearInterval(this.timer)
      }
    }

    handlePlay = () => {
  		this.setState({
  			isRunning: true,
        disabled: true
  		})
  		this.timer = setInterval(() =>{
  			this.setState({
  				count: this.state.count - 1
  			})
  		}, 1000)
  	}

  	//gets triggered when Pause button is pressed
  	handlePause = () => {
  		clearInterval(this.timer)
  		this.setState({
  			isRunning: false,
        disabled: false
  		})
  	}

  	// gets triggered when Reset button is pressed
  	handleReset = () => {
  		clearInterval(this.timer)
  		this.setState({
  			isRunning: false,
  			count: this.props.counterNum,
        disabled: false
  		})
  	}

  render() {
    return (
      <View style={styles.container}>
        <TimerHeader intervalType={this.props.intervalType} isRunning={this.state.isRunning} count={this.state.count}/>
        <TimerDisplay time={this.state.count}/>
        <TouchableOpacity style={styles.button} disabled={this.state.disabled} onPress={this.handlePlay}><Text>Play</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handlePause}><Text>Stop</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handleReset}><Text>Reset</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#DDDDDD",
    margin: 10,
    width: 150,
    height: 50,
  },
});

export default Counter
