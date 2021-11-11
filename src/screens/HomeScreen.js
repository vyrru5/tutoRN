import React from "react";
import { Text, StyleSheet, Button, View, Alert ,StatusBar,SafeAreaView, TouchableHighlight} from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle={'dark-content'} />
    <Text style={styles.text}>Accueil</Text>
    <Button title="Goto component" onPress={() => { navigation.navigate('Component'); console.log('click on BTN component')}} />
    <Button title="Goto list view " onPress={() => navigation.navigate('List')} />
    <Button title="Goto Image view " onPress={() => navigation.navigate('Image')} />



<View style={tailwind('pt-12 items-center')}>
      <View style={tailwind('bg-blue-200 rounded-full px-3 py-1 items-center')}>
      <Text style={tailwind('text-blue-800 font-semibold')}>V0.1</Text>
    </View>
</View>

		<View style={tailwind('pt-12 items-center')}>
			<View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
				<Text style={tailwind('text-blue-800 font-semibold')}>
					Hello Tailwind
				</Text>
			</View>
      <Text style={tailwind('text-center text-gray-600 mt-2 w-56')}>lorem ipsum</Text>
		</View>





    <View style={tailwind('items-center bg-gray-500 p-10')}> 
      <Text style={tailwind('text-white')}>test tailwind</Text>
      <View style={tailwind('bg-white w-full p-6 rounded-lg items-center')}>
        <Text style={tailwind('text-gray-800 text-xl font-medium mt-4')}>Payment successful</Text>
        <Text style={tailwind('text-gray-600 text-center mt-2 w-56')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
       
<View style={tailwind('mt-6')}> 
<TouchableWithoutFeedback onPress= { () => Alert.alert("Impossible")}>
        <View style={tailwind('bg-indigo-600 w-full py-2 items-center rounded-md')}>
       
          <Text style={tailwind('text-white font-medium')} >Go back to dashboard</Text>
          </View>
        </TouchableWithoutFeedback>
</View>



        <View style={tailwind('mt-5')}>
        <TouchableOpacity onPress={() => console.log('click on BTN CANCEL')}>
        <View style={tailwind('rounded-md bg-purple-300 py-1 px-5')}>
          <Text style={tailwind('text-white')}>CANCEL</Text>
        </View>
        </TouchableOpacity>
        </View>

      </View>
    </View>



    </SafeAreaView>
  )
  
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
  text: {
    fontSize: 24,
    textAlign: 'center'
  }
});

export default HomeScreen;