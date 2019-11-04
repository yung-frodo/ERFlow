import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

enum ERFlowView {
    LOGIN = "login",
    MRN = "mrn",
    LOGGING = "logging",
};

enum LoggingButton {
    TRIAGED = "triaged",
    ROOMED = "roomed",
    MDSEEN = "seen by MD",
    MDDISCHARGED = "discharged by MD",
    RNDISCHARGED = "discharged by RN",
    ROOMCLEAN = "room cleaned",
}

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

    const loggingView =
        <View style={styles.container}>
            <Button
                title={LoggingButton.TRIAGED}
                onPress={() => {
                    logButtonPressed(LoggingButton.TRIAGED, textValue);
                    Alert.alert('title', 'message');
                    onButtonPress(ERFlowView.MRN);
                }}
            />
            <Button
                title={LoggingButton.ROOMED}
                onPress={() => {
                    logButtonPressed(LoggingButton.ROOMED, textValue);
                    Alert.alert('title', 'message');
                    onButtonPress(ERFlowView.MRN);
                }}
            />
            <Button
                title={LoggingButton.MDSEEN}
                onPress={() => {
                    logButtonPressed(LoggingButton.MDSEEN, textValue);
                    Alert.alert('title', 'message');
                    onButtonPress(ERFlowView.MRN);
                }}
            />
            <Button
                title={LoggingButton.MDDISCHARGED}
                onPress={() => {
                    logButtonPressed(LoggingButton.MDDISCHARGED, textValue);
                    Alert.alert('title', 'message');
                    onButtonPress(ERFlowView.MRN);
                }}
            />
            <Button
                title={LoggingButton.RNDISCHARGED}
                onPress={() => {
                    logButtonPressed(LoggingButton.RNDISCHARGED, textValue);
                    Alert.alert('title', 'message');
                    onButtonPress(ERFlowView.MRN);
                }}
            />
            <Button
                title={LoggingButton.ROOMCLEAN}
                onPress={() => {
                    logButtonPressed(LoggingButton.ROOMCLEAN, textValue);
                    Alert.alert('title', 'message');
                    onButtonPress(ERFlowView.MRN);
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
        case ERFlowView.LOGGING:
            return loggingView;
        default:
            return defaultView;
    }
}

function logButtonPressed(loggingButton, mrn) {
    // Console.log(loggingButton + "for MRN: " + mrn);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30e4f1',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5px',
    },
});
