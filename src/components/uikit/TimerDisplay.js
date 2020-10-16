import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TimerDisplay extends Component {
  render(){
    return (
      <View style={styles.container}>
				<Text style={styles.textStyle}>
					{Math.floor(this.props.time/60).toString().padStart(2,"0") + ":" +
					(this.props.time % 60).toString().padStart(2,"0")}
				</Text>
			</View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	textStyle: {
	    fontSize: 50,
	    fontWeight: "400",
	}
})
