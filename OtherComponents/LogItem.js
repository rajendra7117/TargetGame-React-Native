import {View, Text, StyleSheet} from 'react-native'
import { colors } from '../Colors/Colors'
const LogItem = (props) => {

    return (<View style={styles.container}>
        
        <Text style={styles.text}>#{props.index}</Text>
        <Text style={styles.text}>Opponent's Guess: {props.guess}</Text>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        padding: 9,
        borderWidth: 1,
        borderColor: colors.primaryColor,
        borderRadius: 8,
        flexDirection: 'row',
        width: 230,
        justifyContent: 'space-between',
        marginHorizontal: 19,
        marginVertical: 5,
        backgroundColor: colors.primaryColor,

        

        

    },
    text:{
        fontSize: 15,
        fontFamily: 'roboto1'
    }
})

export default LogItem