import React from 'react'
import { View, Text,TextInput,Button } from 'react-native'


const LoginScreen = () => {

  let username='';

  const usernameChange =(uname)=>{

    username=uname;
  
    }
  
    let password='';

    const passwordChange =(pword)=>{
  
      password=pword;
    }

    
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
    <View>
      <Text>Welcome Back</Text>
       
        <View>
         <Text>Username:</Text> 

         <TextInput placeholder="Enter your username......" onChangeText={usernameChange}/>
        </View>

        <View>
         <Text>Password:</Text>
         <TextInput placeholder="Enter your password......" onChangeText={passwordChange} />

        </View>

        <View>
        <Button title="submit" onPress={submitFunc}/>
        </View>

    </View>
  )
}

export default LoginScreen


