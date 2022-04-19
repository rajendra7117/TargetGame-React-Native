import {Text, StyleSheet} from 'react-native'
const InstructionText = (props) => {
    return (
        <Text style={[styles.instrunctionText, props.style]}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    instrunctionText:{
        fontSize: 20,

        fontFamily: 'roboto1',
        marginBottom: 0
    }
})
export default InstructionText