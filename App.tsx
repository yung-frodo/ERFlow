import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

enum ERFlowView {
    LOGIN = "login",
    MRN = "mrn",
    LOGGING = "logging",
};

enum LoggingButton {
    TRIAGED = "Triaged",
    ROOMED = "Roomed",
    MDSEEN = "Seen by MD",
    MDDISCHARGED = "Discharged by MD",
    RNDISCHARGED = "Discharged by RN",
    ROOMCLEAN = "Room cleaned",
}

export default function App() {

    const [textValue, onChangeText] = React.useState('');
    const [currView, onButtonPress] = React.useState(ERFlowView.MRN);

    const MRNview =
      <View style={styles.container}>
          <Text>Enter MRN</Text>
          <TextInput
              style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
              allowFontScaling={false}
              placeholder="Type here for MRN!"
              maxLength={20}
              onChangeText={(newText) => onChangeText(newText)}
              value={textValue}
          />
          <Button
              title="Go!"
              onPress={() => {
                if (isNaN(textValue)) {
                    Alert.alert("Error", "Please enter a valid MRN");
                } else {
                    onButtonPress(ERFlowView.LOGGING);
                }
              }}
          />
      </View>;

    const loggingView =
        <View style={styles.container}>
            <Button
                title={LoggingButton.TRIAGED}
                onPress={() => {
                    const message = '"' + LoggingButton.TRIAGED + '" action has been logged for MRN #' + textValue;
                    const title = "Success"
                    Alert.alert(title, message);
                    onChangeText('');
                    onButtonPress(ERFlowView.MRN);
                }}
            />
            <Button
                title={LoggingButton.ROOMED}
                onPress={() => {
                    const message = '"' + LoggingButton.ROOMED + '" action has been logged for MRN #' + textValue;
                    const title = "Success"
                    Alert.alert(title, message);
                    onChangeText('');
                    onButtonPress(ERFlowView.MRN);
                }}
            />
            <Button
                title={LoggingButton.MDSEEN}
                onPress={() => {
                    const message = '"' + LoggingButton.MDSEEN + '" action has been logged for MRN #' + textValue;
                    const title = "Success"
                    Alert.alert(title, message);
                    onChangeText('');
                    onButtonPress(ERFlowView.MRN);
                }}
            />
            <Button
                title={LoggingButton.MDDISCHARGED}
                onPress={() => {
                    const message = '"' + LoggingButton.MDDISCHARGED + '" action has been logged for MRN #' + textValue;
                    const title = "Success"
                    Alert.alert(title, message);
                    onChangeText('');
                    onButtonPress(ERFlowView.MRN);
                }}
            />
            <Button
                title={LoggingButton.RNDISCHARGED}
                onPress={() => {
                    const message = '"' + LoggingButton.RNDISCHARGED + '" action has been logged for MRN #' + textValue;
                    const title = "Success"
                    Alert.alert(title, message);
                    onChangeText('');
                    onButtonPress(ERFlowView.MRN);
                }}
            />
            <Button
                title={LoggingButton.ROOMCLEAN}
                onPress={() => {
                    const message = '"' + LoggingButton.ROOMCLEAN + '" action has been logged for MRN #' + textValue;
                    const title = "Success"
                    Alert.alert(title, message);
                    onChangeText('');
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30e4f1',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
    },
});
