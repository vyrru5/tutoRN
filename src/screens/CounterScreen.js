import React, {useReducer}  from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'



const reducer = (state, action) => {

switch(action.type){
    case 'increase': return {...state, count:state.count + 1}
    case 'decrease': return {...state, count:state.count - 1}
    case 'reset': return {...state, count: 0}
    default: return {...state}
}

}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {count :0})


    return (
        <View>
             <Button title='reset' onPress={ () => { dispatch({type : 'reset', payload : 0}) }} />
            <Button title='increase' onPress={ () => { dispatch({type : 'increase', payload : 1}) }} />
            <Button title='decrease' onPress={ () => { dispatch({type : 'decrease', payload : 1}) }}/>
           
            <View style={styles.container}>
                <Text>Nombre</Text>
            <Text style={styles.bigNumber}>{state.count}</Text>
            </View>
        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection: 'column',
        justifyContent:'center',
        backgroundColor: '#ececec'
    },
    bigNumber:{
        color:'red',
        fontSize:45
    }
})
