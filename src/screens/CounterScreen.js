import React, {useReducer}  from 'react'
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import tailwind from "tailwind-rn";




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
    <View >
    {/*            
    <View style={styles.wrapper}>
        <Button title='reset' onPress={ () => { dispatch({type : 'reset', payload : 0}) }} />
        <Button title='increase' onPress={ () => { dispatch({type : 'increase', payload : 1}) }} />
        <Button title='decrease' onPress={ () => { dispatch({type : 'decrease', payload : 1}) }} />
        </View> 
        */}

    <View style={tailwind('flex-row justify-between m-2')}>
        <FontAwesome.Button name="minus-square-o" backgroundColor="#3b5998" style={tailwind('text-center flex items-center')} onPress={ () => { dispatch({type : 'decrease', payload : 1}) }}>Diminuer</FontAwesome.Button>
        <FontAwesome.Button name="refresh" backgroundColor="#3b5998" style={tailwind('text-center flex items-center')} onPress={ () => { dispatch({type : 'reset', payload : 0}) }} >reset</FontAwesome.Button>
        <FontAwesome.Button name="plus-square-o" backgroundColor="#3b5998" style={tailwind('text-center flex items-center')} onPress={ () => { dispatch({type : 'increase', payload : 1}) }} >Augmenter</FontAwesome.Button>
    </View>

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
       


    },
    wrapper:{
        justifyContent:'space-between',
        padding:5,  
    },
    bigNumber:{
        color:'#3b5998',
        fontSize:45,
    },

})
