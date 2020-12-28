import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Instagram extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.displayText}>Instagram</Text>
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
    displayText: {
        marginTop: 50,
        padding: 50,
        fontSize: 24,
        backgroundColor: "red",
        alignSelf: "center"
      }
  });
  