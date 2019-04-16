/* Core */
import React, { Component } from 'react'

/* Presentational */
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'
import styles from './styles'
import logo from '../../assets/logo.png'


export default class Main extends Component {

	state = {
		newBox: ''
	}

  async componentDidMount(){

    const box = await AsyncStorage.getItem('@RocketDrive:box')

    if(box){
      this.props.navigation.navigate('Box')      
    }
  }

	createBox = async() => {
		const response = await api.post('boxes', {
			title: this.state.newBox
		})

    await AsyncStorage.setItem('@RocketDrive:box', response.data._id)

		this.props.navigation.navigate('Box')
	}

  render() {
    return (
      <View style = {styles.container}>
      	<Image style = {styles.logo} source = {logo} />

      	<TextInput
      		style = {styles.input}
      		placeholder = 'Criar nova pasta'
      		placeholderTextColor = '#999'
      		autoCapitalize = 'none'
      		autoCorrect =  {false}
      		underlineColorAndroid = 'transparent' 
      		value = {this.state.newBox}
      		onChangeText = { text => this.setState({newBox: text})}
      	/>

      	<TouchableOpacity
      		onPress = {this.createBox}
      		style = {styles.button}>
      	<Text style = {styles.buttonText}>Criar</Text>
      	</TouchableOpacity>

      </View>
    )
  }
}
