import React, { useState } from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Button,ImageBackground} from 'react-native'
import {LOGIN_PAGE, MY_TABS} from '../constant/Navigation';

const Register = ({ route, navigation }) => {

  //const { id } = route.params;

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')

    
const submitFunc=()=>{


  if(password===confirmPassword)
  {
    alert("Registration Successful");
  }
  else
  {
   alert("Password and Confirm Password do not match");
  }

}

  return (
    <View style={styles.container1}>
      
      <ImageBackground source={require('../../img2.jpg')} resizeMode="cover">
       
       <View style={styles.container2}>

        <Text style={styles.title}>Create Account</Text>
 
       <View>
       <Text style={styles.label}>Email:</Text> 

    <TextInput style={styles.textinput} value={email} onChangeText={text=>setEmail(text)}/>
  </View>

  <View>
   <Text style={styles.label}>Password:</Text>
   <TextInput style={styles.textinput} value={password} onChangeText={text=>setPassword(text)}/>

  </View>

  <View>
   <Text style={styles.label}>Confirm Password:</Text>
   <TextInput style={styles.textinput} value={confirmPassword} onChangeText={text=>setConfirmPassword(text)}/>

  </View>

  <View>
  <TouchableOpacity style={styles.registerbutton} onPress={submitFunc}><Text style={styles.registerbuttontext}>Register</Text></TouchableOpacity>
  </View>
 
  </View>
  </ImageBackground>
    
    </View>
    
  )
}

const styles = StyleSheet.create({

  container1:{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
      },

  cont:{
    padding:5,
    marginTop:28,
  },

  container2:{
     borderWidth:1,
     backgroundColor: 'white',
     borderRadius:50,   
     padding:25,
     margin:150,
  },
  
    title: {
      fontWeight:'bold',
      fontSize:25,
      textAlign:'center',
      color:'indigo',
      paddingBottom:5,
    },
  
    label:{
       padding:10,
    },

    textinput: {
      width: 300,
      height: 40,
      borderWidth:1.5,
      backgroundColor: 'gainsboro',
      borderRadius:100,   
      borderStyle:'solid',
      borderColor:'black',
      marginBottom: 10,
      paddingLeft: 10,
     // justifyContent: 'center',
      //alignItems: 'center',
    },
  
    registerbutton:{
      width: 300,
      height: 40,
      borderWidth:1.5,
      backgroundColor: 'indigo',
      borderRadius:100,  
      padding:5,
      marginTop:28,
      justifyContent: 'center',
      borderStyle: 'solid',
      borderColor: 'indigo',
    },
  
    registerbuttontext:{
      fontWeight:'bold',
      textAlign:'center',  
      color:'white',
      fontSize:22,
    }
  
  });



export default Register


