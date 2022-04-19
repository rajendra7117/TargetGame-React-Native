import { View, Text, StyleSheet, Image, Dimensions, useWindowDimensions } from "react-native";
import Title from "../OtherComponents/Title";
import Goal from '../assets/goal.png'
import PrimaryButton from "../Buttons/PrimaryButton";
const GameOverScreen = (props) => {

  const {height, width} = useWindowDimensions()

  const responsiveImageSize = height< 370 ? 100 : 250
  return (
    <View style={[styles.rootContainer, {marginTop: height<370 ? 20 : 100}]}>
      <Title>Game Over</Title>
      <View style={[styles.imageContainer, {width: responsiveImageSize, height: responsiveImageSize}]}>
        <Image style={styles.image} source={Goal}/>

      </View>
      <View style={styles.textContainer}>
        <Text style={styles.infoText}>
          You took <Text style={styles.highlightText}>{props.rounds}</Text> rounds to guess this Number <Text style={styles.highlightText}>{props.enteredNumber}</Text>
        </Text>
      </View>
      <PrimaryButton onPress={props.playAgain}>Play Again!</PrimaryButton>
    </View>
  );
};
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 150,
    alignItems: "center",
    padding: 9,

    marginHorizontal: 17,
  },
  imageContainer:{
    width: width < 350 ? 100 : 250,
    height: width < 350 ? 100 : 250,
    marginTop: 30,
   
  },
  image: {
    width: '90%',
    height: '90%'
  },
  titleText:{
    fontSize: 20,
    borderRadius: 30
  },
  textContainer:{
    textAlign: 'center',
    padding: 10,
  },
  infoText: {
    fontFamily: 'roboto1',
    fontSize: 20

  },
  highlightText:{
    fontFamily: 'roboto1',
    fontWeight: 'bold',
    fontSize: 25
  }

});

export default GameOverScreen;
