import React, {Component} from 'react'
import {Text, StyleSheet,View} from 'react-native'

 class App extends Component{
	render(){
		return(
          <View style = {styles.container}>

             <Text style ={styles.texto}> je teste mes valeurs </Text>
          
          </View>
			)
	}
}
 
 const styles = StyleSheet.create({
 	container:{
 		flex:1,
 		backgtoundColor:"azul",
 	},
 	texto:{
 		color:"lime",
 	}
 })


export default App