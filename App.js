import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Instagram from './screens/ig';
import Facebook from './screens/fb';
import { screensEnabled } from 'react-native-screens';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.displayText}>Buzz App</Text>
        <AppContainer />
      </View>
    );
  }
}

var TabNavigator = createBottomTabNavigator({
  Instagram: {screen:Instagram},
  Facebook: {screen:Facebook},
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayText: {
    marginTop: 50,
    padding: 50,
    fontSize: 24,
    backgroundColor: "blue",
    alignSelf: "center"
  }
});
