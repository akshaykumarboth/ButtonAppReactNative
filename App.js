import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 'My First Screen'
    }

    this.toggelButton = this.toggelButton.bind(this);
  }

  toggelButton() {
    this.setState({
      temp: 'My First Screen: Button clicked'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.changeText} >{this.state.temp}</Text>
        <Button
          onPress={() => {
            this.toggelButton();
          }}
          title="Next"
          color = "green"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeText: {
    margin: 10
  }
});
