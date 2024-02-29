import { useState } from 'react';
import {View, Text, Pressable, TextInput} from 'react-native'; 
import style from './App.style'

export default function App() {

  const [valorA, setValorA] = useState(0)
  const [valorB, setValorB] = useState(0)
  const [resultado, setResultado] = useState(0)

  const somar = () => {
    setResultado(valorA + valorB);
  };

  const subtrair = () => {
    setResultado(valorA - valorB);
  };

  const multiplicar = () => {
    setResultado(valorA * valorB);
  };

  const dividir = () => {
    setResultado(valorA / valorB);
  };

  return (

    <View style={style.container}>
    
      <Text style={style.titulo}>Calculadora</Text>
      

      <TextInput style={style.input} value={valorA} onChangeText={(textValorA) => setValorA(Number(textValorA))} />

      <TextInput style={style.input} value={valorB} onChangeText={(textValorB) => setValorB(Number(textValorB))} />

      <Text style={style.resultado}> Resultado = {resultado} </Text>

      
      <Pressable style={style.button} onPress={somar} > 
      <Text> somar </Text> 
      </Pressable>
      
      <Pressable style={style.button} onPress={subtrair} > 
      <Text >subtrair </Text> 
      </Pressable>
      
      <Pressable style={style.button} onPress={multiplicar} > 
      <Text >multiplicar </Text> 
      </Pressable>
      
      <Pressable style={style.button} onPress={dividir} > 
      <Text> dividir </Text> 
      </Pressable>
      
    </View>
  );

}