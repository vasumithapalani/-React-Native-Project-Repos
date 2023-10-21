import React, { useState } from 'react'
import { View, Text,TextInput,StyleSheet,Button} from 'react-native'


const Calculator = () => {

    const [input,setInput]=useState('');
    const [res,setResult]=useState('');

  
      
  const Calculation=(value)=>{
  if(value==='=')
  {
    try{
        setInput(eval(input));
      }
    catch(e){
       setResult('Error....');
    }
    
  }
  else if(value==='C')
  {
    setInput('');
    setResult('');
  }
  else{
    
    setInput(input+value);

  }
}
  
    return (
      <View style={styles.container1}>

        <Text>Calculator</Text>
        <Text style={styles.result}>{res}</Text>
        <Text style={styles.input}>{input}</Text>

        <View style={styles.container2}> 
         
         
<View style={styles.calculatorRow}>
    <Button title='7' style={styles.button} onPress={()=>{Calculation('7')}}/>
    <Button title='8' style={styles.button} onPress={()=>{Calculation('8')}}/>
    <Button title='9' style={styles.button} onPress={()=>{Calculation('9')}}/>
    <Button title='*' style={styles.button} onPress={()=>{Calculation('*')}}/>
</View>
   
<View style={styles.calculatorRow}>
    <Button title='4' style={styles.button} onPress={()=>{Calculation('4')}}/>
    <Button title='5' style={styles.button} onPress={()=>{Calculation('5')}}/>
    <Button title='6' style={styles.button} onPress={()=>{Calculation('6')}}/>
    <Button title='-' style={styles.button} onPress={()=>{Calculation('-')}}/>

</View>

 
<View style={styles.calculatorRow}>
    <Button title='1' style={styles.button} onPress={()=>{Calculation('1')}}/>
    <Button title='2' style={styles.button} onPress={()=>{Calculation('2')}}/>
    <Button title='3' style={styles.button} onPress={()=>{Calculation('3')}}/>
    <Button title='+' style={styles.button} onPress={()=>{Calculation('+')}}/>
</View>

 
<View style={styles.calculatorRow}>
    <Button title='C' style={styles.button} onPress={()=>{Calculation('C')}}/>
    <Button title='0' style={styles.button} onPress={()=>{Calculation('0')}}/>
    <Button title='/' style={styles.button} onPress={()=>{Calculation('/')}}/>
    <Button title='=' style={styles.button} onPress={()=>{Calculation('=')}}/>
</View>
  

        </View>

    </View>
         
    )
  }
  

  const styles = StyleSheet.create({

    container1:{
       flex: 1,
       justifyContent:'center',
    },

    container2:{
     flexDirection:'column',
   },
      
result:{
 textAlign:'right',
 margin:10,
},

input:{
  textAlign:'right',
  margin:10,
},

calculatorRow:{
  flexDirection:'row',
 justifyContent:'space-around',
 alignItems:'center',
},

button:{
 flex:1,
 margin:5,
 backgroundColor:'grey',
 justifyContent:'center',
 alignItems:'center',
},

});
  
  export default Calculator;