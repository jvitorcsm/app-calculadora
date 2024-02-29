import { useState } from 'react';
import {View, Text, Button, TextInput} from 'react-native'; 

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

    <View>
      <Text>Calculadora</Text>
      <Text> </Text>

      <TextInput value={valorA} onChangeText={(textValorA) => setValorA(Number(textValorA))} />

      <TextInput value={valorB} onChangeText={(textValorB) => setValorB(Number(textValorB))}/>

      <Text> </Text>
      <Button title="Somar" onPress={somar}/>
      <Text> </Text>
      <Button title="Subtrair" onPress={subtrair}/>
      <Text> </Text>
      <Button title="Multiplicar" onPress={multiplicar}/>
      <Text> </Text>
      <Button title="Dividir" onPress={dividir}/>
      <Text> </Text>

      <Text> Resultado: {resultado} </Text>
    </View>
  );

}