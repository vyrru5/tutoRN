import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <Text>Images screens</Text>


            <ImageDetail title='Forest'/>
            <ImageDetail title='beach'/>
            <ImageDetail title='city'/>
            <ImageDetail title='park'/>



        </View>
    )
}

export default ImageScreen

const styles = StyleSheet.create({})
