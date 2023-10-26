import React, { useState } from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Button,ImageBackground,TouchableWithoutFeedback,TouchableHighlight} from 'react-native'
import {REGISTRATION_PAGE} from '../constant/Navigation';



const Login = ({navigation}) => {

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

    
const submitFunc=()=>{


  if(username==="vasu@gmail.com" && password==="vasu@456")
  {
    alert("Login Successful");
  }
  else
  {
   alert("Login Failed.Please Enter the valid Credentials.")
  }

}

  return (
    <View style={styles.container1}>
      <ImageBackground source={require('../../img1.jpg')} resizeMode="cover">
       <View style={styles.container2}>

        <Text style={styles.title}>Welcome Back</Text>
 
       <View>
       <Text style={styles.label}>Username:</Text> 

    <TextInput style={styles.textinput} value={username} placeholder="Enter your username......" onChangeText={text=>setUsername(text)}/>
  </View>

  <View>
   <Text style={styles.label}>Password:</Text>
   <TextInput style={styles.textinput} value={password} placeholder="Enter your password......" onChangeText={text=>setPassword(text)}/>

  </View>

  <View>
  <TouchableOpacity style={styles.loginbutton} onPress={submitFunc}><Text style={styles.loginbuttontext}>Log In</Text></TouchableOpacity>
  </View>
    
  
    </View>

    </ImageBackground>
    </View>
    
  )
}

/*
<TouchableOpacity style={styles.loginbutton} onPress={submitFunc}><Text style={styles.loginbuttontext}>Log In</Text></TouchableOpacity>
<TouchableHighlight style={styles.loginbutton} onPress={submitFunc}><Text style={styles.loginbuttontext}>Log In</Text></TouchableHighlight>
<TouchableWithoutFeedback style={styles.loginbutton} onPress={submitFunc}><Text style={styles.loginbuttontext}>Log In</Text></TouchableWithoutFeedback>

*/ 

const styles = StyleSheet.create({

  container1:{
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
  },

  cont:{
    marginTop:50,
    padding:10,
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
      color:'darkturquoise',
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
  
    loginbutton:{
      width: 300,
      height: 40,
      borderWidth:1.5,
      backgroundColor: 'darkturquoise',
      borderRadius:100,  
      padding:5,
      marginTop:28,
      justifyContent: 'center',

    },
  
    loginbuttontext:{
      fontWeight:'bold',
      textAlign:'center',  
      color:'white',
      fontSize:22,
      borderStyle:'solid',
      borderColor:'black',
    }
  
  });



export default Login
