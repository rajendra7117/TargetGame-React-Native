import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import bImage from "./assets/dice.jpg";
import { colors } from "./Colors/Colors";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts} from 'expo-font';
import AppLoading from "expo-app-loading";
export default function App() {
  const [showGameScreen, setShowGameScreen] = useState(false);
  const [enteredNumber, setEnteredNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [rounds, setRounds] = useState(0)
 const[fontsLoaded] = useFonts({
        roboto1: require('./fonts/RobotoMono-VariableFont_wght.ttf'),
        roboto2: require('./fonts/RobotoMono-Italic-VariableFont_wght.ttf')
  })
  const screenToggle = (num) => {
    setShowGameScreen(true);
    setEnteredNumber(num);
    console.log(showGameScreen)
  };
  const gameOver = (rounds) => {
    setIsGameOver(true);
    setRounds(rounds.length)
    
  };

  const restartGame = () => {
    setEnteredNumber(null)
    setIsGameOver(false)
    
   
  }
  console.log(isGameOver, enteredNumber)
  if(!fontsLoaded){
    <AppLoading />
  }
  let screen = <StartGameScreen screenToggle={screenToggle} />;
  if (enteredNumber && showGameScreen) {
    screen = <GameScreen enteredNumber={enteredNumber} gameOver={gameOver} />;
  }
  if (isGameOver && enteredNumber) {
    screen = <GameOverScreen enteredNumber={enteredNumber} rounds={rounds} playAgain={restartGame}/>;
  }

  return (
    <LinearGradient
      colors={["#000000", colors.primaryColor]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={bImage}
        resizeMethod="resize"
        style={styles.rootContainer}
        imageStyle={styles.imageBachground}
      >
        <SafeAreaView style={styles.rootContainer}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageBachground: {
    opacity: 0.15,
  },
});
