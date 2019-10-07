import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    return (
          <View style={styles.container}>
              <Text>Enter MRN</Text>
              <TextInput
                  style={{height: 40}}
                  placeholder="Type here for MRN!"
                  // onChangeText={(text) => this.setState({text})}
                  value=''
              />
              <Button
                  title="Go!"
                  // onPress =
              />
          </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30e4f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
