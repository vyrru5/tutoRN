import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ComponentScreen = () =>  {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>Components screens</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    text: {
        color:'white',
        fontSize: 30
    }

})

export default ComponentScreen