import React from "react";
import { Text, StyleSheet, Button, View, Alert ,StatusBar,SafeAreaView} from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
<StatusBar barStyle={'dark-content'} />
    <Text style={styles.text}>Page accueil</Text>
    <Button title="Goto component" onPress={() => console.log('click on BTN component')} />
    <Button title="Goto list view " onPress={() => Alert.alert('Errror')} />
    </SafeAreaView>
  )
  
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
  text: {
    fontSize: 30
  }
});

export default HomeScreen;