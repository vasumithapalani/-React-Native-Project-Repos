import React,{useState,useEffect} from 'react'
import { TouchableOpacity,Text,View,Button,StyleSheet } from 'react-native';


const Counter=()=>{

    const [counter1,setCounter1]=useState(0);
    const [counter2,setCounter2]=useState(0);

    useEffect(()=>
    {
        console.log("UseEffect is Executing");
    },[counter2]);

return(

     <View>
        <Text style={styles.cont1}>Counter 1: {counter1}</Text>
        <Text style={styles.cont1}>Counter 2: {counter2}</Text>

     <TouchableOpacity style={styles.button} onPress={()=> setCounter1(counter1+5)}><Text style={styles.buttontext}>Increment1</Text></TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={()=> setCounter2(counter2+5)}><Text style={styles.buttontext}>Increment2</Text></TouchableOpacity>

     </View>

    )

    }

const styles = StyleSheet.create({

    container1:{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    },
    
    cont1:
    {
      fontSize:18,
      fontWeight:'bold',
    },

      button:{
        width: 200,
        height: 40,
        borderWidth:1.5,
        backgroundColor: 'skyblue',
        borderRadius:100,  
        justifyContent: 'center',
        padding:5,
        marginTop:28,
        
      },
    
      buttontext:{
        fontWeight:'bold',
        textAlign:'center',  
        color:'white',
        fontSize:22,
        borderStyle:'solid',
        borderColor:'black',
      }
    
    });
  

    export default Counter

