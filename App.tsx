import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

enum ERFlowView {
    LOGIN = 0,
    MRN = 1,
    LOGGING = 2,
};

export default function App() {
    const [textValue, onChangeText] = React.useState('');
    const [currView, onButtonPress] = React.useState(ERFlowView.MRN);

    const MRNview =
      <View style={styles.container}>
          <Text>Enter MRN</Text>
          <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              placeholder="Type here for MRN!"
              onChangeText={(newText) => onChangeText(newText)}
              value={textValue}
          />
          <Button
              title="Go!"
              onPress={() => {
                onButtonPress(ERFlowView.LOGGING);
              }}
          />
      </View>;

    const defaultView =
        <View style={styles.container}>
            <Text>{currView}</Text>
            <Text>{textValue}</Text>
        </View>;

    switch(currView) {
        case ERFlowView.MRN:
            return MRNview;
        default:
            return defaultView;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30e4f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
