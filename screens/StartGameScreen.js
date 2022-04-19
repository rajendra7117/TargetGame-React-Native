import { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native";

import PrimaryButton from "../Buttons/PrimaryButton";
import { colors } from "../Colors/Colors";
import InstructionText from "../OtherComponents/InstructionText";
const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const inputHandler = (enteredText) =>{
      setEnteredNumber(enteredText)
   
  }

  const resetHandler = () => {
      setEnteredNumber('')
  }
  const confirmNumber = () => {
      const convertedNumber = parseInt(enteredNumber)
      if(isNaN(convertedNumber) || convertedNumber<=0 || convertedNumber>99){
        Alert.alert(
            'Invalid Number',
            'Number has to be a number between 1 and 99',
            [{text: 'Okay', style: 'destructive', onPress: resetHandler}]
        )
        return;
      }
      props.screenToggle(enteredNumber)
  }

  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior='position' keyboardVerticalOffset={0} enabled>
    <View style={styles.inputContainer}>
        <InstructionText >Enter a number</InstructionText>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={inputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmNumber}>Confirm</PrimaryButton>
      </View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
   
  );
};
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: deviceWidth < 380 ? 70 : 100,
    padding: deviceWidth <380 ? 10 : 18,
    padding: 8,
    width: deviceWidth < 380 ? '90%': '95%',
    backgroundColor: colors.primaryColor,
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 9,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",

    color: "#ffffff",
    padding: 8,
    marginBottom: 4,
    width: "20%",
    alignSelf: "center",
    fontSize: 20,
    textAlign: 'center'
  },
  screen: {
    flex: 1
  }
});

export default StartGameScreen;
