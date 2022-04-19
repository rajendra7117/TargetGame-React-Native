import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from "react-native";

import PrimaryButton from "../Buttons/PrimaryButton";
import InstructionText from "../OtherComponents/InstructionText";
import Title from "../OtherComponents/Title";
import Ionicons from "@expo/vector-icons/Ionicons";
import LogItem from "../OtherComponents/LogItem";

function generateRandomNumber(min, max, exclude) {
  const randnum = Math.floor(Math.random() * (max - min) + min);

  if (randnum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randnum;
  }
}
let minLimit = 1;
let maxLimit = 100;
const GameScreen = (props) => {
  const initialGuess = generateRandomNumber(1, 100, props.enteredNumber);
  const [currentNumber, setCurrentNumber] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);
  useEffect(() => {
    if (currentNumber === parseInt(props.enteredNumber)) {
      props.gameOver(rounds);
    }
  }, [currentNumber, props.enteredNumber]);

  useEffect(() => {
    minLimit = 1;
    maxLimit = 100;
  }, []);
  const guessHandler = (direction) => {
    if (
      (direction === "lower" && currentNumber < props.enteredNumber) ||
      (direction === "higher" && currentNumber > props.enteredNumber)
    ) {
      Alert.alert("Warning", "Don't lie!, You know this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxLimit = currentNumber;
      console.log(maxLimit);
    }
    if (direction === "higher") {
      minLimit = currentNumber + 1;
      console.log(minLimit);
    }
    const newRandomNumber = generateRandomNumber(
      minLimit,
      maxLimit,
      currentNumber
    );
    setCurrentNumber(newRandomNumber);
    setRounds((prev) => [newRandomNumber, ...prev]);
  };

  const { height, width } = useWindowDimensions();
  const marginTopRes = height < 380 ? 30 : 150;
  let content;
  if (height > 380) {
    content = (
      <>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{currentNumber}</Text>
        </View>
        <View style={styles.secondContainer}>
          <InstructionText style={styles.instructionText}>
            Lower or Higher?
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={guessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove-sharp" size={24} />
            </PrimaryButton>
            <PrimaryButton onPress={guessHandler.bind(this, "higher")}>
              <Ionicons name="md-add-sharp" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.roundsContainer}>
            <FlatList
              data={rounds}
              renderItem={(itemData) => {
                return (
                  <LogItem
                    index={rounds.length - itemData.index}
                    guess={itemData.item}
                  />
                );
              }}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </>
    );
  }
  if (height < 380) {
    content = (
      <>
        <View >
          <View style={styles.resContainer}>
            <PrimaryButton
              onPress={guessHandler.bind(this, "lower")}
              style={styles.resButtonStyle}
            >
              <Ionicons name="md-remove-sharp" size={24} />
            </PrimaryButton>

            <View style={styles.resTextContainer}>
              <Text style={styles.text}>{currentNumber}</Text>
            </View>
            <PrimaryButton
              onPress={guessHandler.bind(this, "higher")}
              style={styles.resButtonStyle}
            >
              <Ionicons name="md-add-sharp" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.roundsContainer}>
            <FlatList
              data={rounds}
              renderItem={(itemData) => {
                return (
                  <LogItem
                    index={rounds.length - itemData.index}
                    guess={itemData.item}
                  />
                );
              }}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={[styles.container, { marginTop: marginTopRes }]}>
      <Title>Opponent's Guess</Title>
      {content}
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    marginVertical: 150,
    alignItems: "center",
    padding: 9,

    marginHorizontal: 20,
    flex: 1,
  },
  textContainer: {
    borderWidth: 2,
    borderColor: "#000000",
    padding: 20,
    borderRadius: 8,
    marginTop: 10,

    marginVertical: 8,
  },
  text: {
    fontSize: deviceWidth < 380 ? 22 : 25,

    color: "#ffffff",
    fontFamily: "roboto1",
    textAlign: "center",
  },
  secondContainer: {
    alignItems: "center",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  instructionText: {
    color: "#ffffff",
    fontFamily: "roboto2",
  },
  roundsContainer: {
    flex: 7,
    padding: 16,
  },
  roundText: {
    fontSize: 20,
    fontFamily: "roboto2",
    
  },
  resContainer: {
    flex: 5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    
  },
  resButtonStyle: {
    width: 120,
    height: 40,
    textAlign: "center",
    borderRadius: 10,
  },
  resTextContainer: {
    borderColor: "#ffffff",
    borderWidth: 2,
    padding: 6,
    borderRadius: 2,
  },

});

export default GameScreen;
