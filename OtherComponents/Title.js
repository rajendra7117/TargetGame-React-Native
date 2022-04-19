import {View, Text, StyleSheet, Dimensions} from 'react-native'
 const Title = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Text style={[styles.text ,props.style]}>{props.children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        
        marginVertical: 4,
        padding: 1,
        borderWidth: 2,
        borderColor: '#ffffff',
        padding: 10

    },
    text: {
        color: '#ffffff',
        fontFamily: 'roboto1',
        fontSize: deviceWidth < 380 ? 20 : 25,
    }
})

export default Title;