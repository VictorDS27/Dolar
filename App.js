import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Dolar from './components/Dolar';
import Api from './components/Api';

export default function App() {
		
	const [dolar, setDolar] = useState(0);
	const [inputCep, setInputCep] = useState(0);
	
async function carregaDolar(){
	const response = await Api.get('json/last/USD-BRL');
	setDolar(response.data.USDBRL);
}
	
  return (
	  
    <View style={styles.container}>
	 <View style={styles.bloco}>
					  
		  <Text style={styles.textobloco}>
			  Cotação de moedas:
		  </Text>
			 
			  <TouchableOpacity 
				  onPress={carregaDolar}
				  style={styles.botao}>
				  <Text style={styles.textobotao}>Dolar para Real</Text>
				  
			  </TouchableOpacity>
		 
		 <Dolar data={dolar} />
		 
		  </View>
		  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F7161',
    alignItems: 'center',
    justifyContent: 'center',
  },
	
	bloco: {
    alignItems: 'center',
    justifyContent: 'center',
	width: '80%',
	backgroundColor: '#6D8B74',
    borderRadius: 10,
	},
	
	textobloco: {
		color: '#DFD3C3',
		fontSize: 20,
		paddingTop: 20,
	},
	
	botao: {
		padding: 20 ,
	},
	
	textobotao:{
		color: '#97C4B8',
		fontSize: 20,
		
	},
	
});