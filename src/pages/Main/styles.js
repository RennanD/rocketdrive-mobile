import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'stretch',
  	paddingHorizontal: 30
	},
  input:{
  	height: 48,
  	borderRadius: 5,
  	borderWidth: 1,
  	borderColor: '#DDD',
  	fontSize: 16,
  	paddingHorizontal: 20,
  	marginTop: 30
  },
  logo:{
  	alignSelf: 'center'
  },
  button: {
  	height: 48,
  	borderRadius: 5,
  	borderWidth: 1,
  	backgroundColor: '#7159c1',
  	paddingHorizontal: 20,
  	justifyContent: 'center',
  	alignItems: 'center',
  	marginTop: 10
  },
  buttonText: {
  	fontSize: 20,
  	fontWeight: 'bold',
  	color: '#FFF'
  }
  


})

export default styles
