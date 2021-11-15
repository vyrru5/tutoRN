import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const ListScreen = () => {

const people = [
    { name:'Alexandre', },
    { name:'Lisa', },
    { name:'Tommy', },
    { name:'brad', },
    { name:'kenny', },
    { name:'Charlie', },
    { name:'zack', },
    { name:'Emile', }, 
    { name:'Georges', },
    { name:'Charle', },
    { name:'Paul', }
]


const student = [
    { name:'Alexandre', },
    { name:'Lisa', },
    { name:'Tommy', },
    { name:'brad', },
    { name:'kenny', },
    { name:'Charlie', },
    { name:'zack', },
    { name:'Emile', }, 
    { name:'Georges', },
    { name:'Charle', },
    { name:'Paul', }
]
    return (
        <View>   
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator= {false}
            data={student}  
            renderItem={({item}) => <Text style={styles.textStyle1}>{item.name}</Text>} 
            keyExtractor={ student => student.name }
            />      
            <View style={styles.separator}></View> 
            <FlatList 
            showsHorizontalScrollIndicator= {false}
            data={people}  
            renderItem={({item}) => <Text style={styles.textStyle}>{item.name}</Text>} 
            keyExtractor={ peolple => peolple.name }
            />
        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50,
        marginHorizontal:10 
    },
    textStyle1:{
        marginVertical: 10,
        marginHorizontal:10 
    },
    separator:{
        borderBottomColor:'rgb(100,100,100)',
        borderBottomWidth:1
    }
})
