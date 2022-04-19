import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
   
  return (
    <View style={[styles.outerContainer, props.style]}>
      <Pressable style={styles.innerContainer} android_ripple={{color: "#ffff"}} onPress={props.onPress}>
        <Text style={styles.innerText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: 120,
    borderColor: "#000000",
    borderRadius: 28,
    margin: 8,
    backgroundColor: "#000000",
    
    overflow: 'hidden',
    textAlign: 'center'
  },
  innerContainer: {
    padding: 6,
    elevation: 2,
    paddingVertical: 8,
    textAlign: 'center'
  },
  innerText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default PrimaryButton;
