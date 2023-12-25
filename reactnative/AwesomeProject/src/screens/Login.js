import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, ImageBackground, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import { HOME_PAGE, REGISTRATION_PAGE } from '../constant/Navigation';
import authActions from '../redux/auth/actions'


import { useDispatch, useSelector } from 'react-redux';


const Login = ({ navigation }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const { login } = authActions;



  const isAuthenticated = useSelector(state => state);
  console.log('isAuthenticated............', isAuthenticated);

  const submitFunc = async () => {


    try {

      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({

          // username: 'kminchelle',
          // password: '0lelplR',

          username: username,
          password: password

        }),
      });


      const data = await response.json();

      console.log('response......', JSON.stringify(response))

      console.log('Data......', JSON.stringify(data))

      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Data Username:', data.username);



      const authToken = data.token;

      if (response.ok) {

        if (data && authToken && username === data.username) {


          dispatch(login({ isAuthenticated: true, token: authToken }));

          //navigation.navigate("Draw");
         
         // navigation.navigate("GetRequest");

         //navigation.navigate("PostRequest");

         //navigation.navigate("UpdateRequest");

         //navigation.navigate("DeleteRequest");

         //navigation.navigate("FileSystem");
         
         navigation.navigate("ZipUnZip");

   
          console.log('Login Successful')

        } else {
          console.log('Invalid credentials')
        }

      }

      else {
        if (response.status === 401) {
          throw new Error('Unauthorized: Invalid credentials');
        } else if (response.status === 500) {
          throw new Error('Internal Server Error');
        } else {
          throw new Error('Invalid credentials');
        }
      }


    } catch (error) {
      console.error('Login failed:', error.message)

    }
  };
  /*useEffect(()=>{
    submitFunc();
  },[]);*/

  return (
    <View style={styles.container1}>

      <ImageBackground source={require('../../img1.jpg')} resizeMode="cover">

        <View style={styles.container2}>

          <Text style={styles.title}>Welcome Back</Text>

          <View>
            <Text style={styles.label}>Username:</Text>

            <TextInput style={styles.textinput} value={username} placeholder="Enter your username......" onChangeText={text => setUsername(text)} />
          </View>

          <View>
            <Text style={styles.label}>Password:</Text>
            <TextInput style={styles.textinput} value={password} placeholder="Enter your password......" onChangeText={text => setPassword(text)} />

          </View>

          <View>
            <TouchableOpacity style={styles.loginbutton} onPress={submitFunc}><Text style={styles.loginbuttontext}>Log In</Text></TouchableOpacity>
          </View>

        </View>

      </ImageBackground>
    </View>


  )
}


/*export const mappingStateToProps = (state) => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
  };
};
value={username} value={password}
*/





/*
<TouchableOpacity style={styles.loginbutton} onPress={submitFunc}><Text style={styles.loginbuttontext}>Log In</Text></TouchableOpacity>
<TouchableHighlight style={styles.loginbutton} onPress={submitFunc}><Text style={styles.loginbuttontext}>Log In</Text></TouchableHighlight>
<TouchableWithoutFeedback style={styles.loginbutton} onPress={submitFunc}><Text style={styles.loginbuttontext}>Log In</Text></TouchableWithoutFeedback>

*/

const styles = StyleSheet.create({

  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cont: {
    marginTop: 50,
    padding: 10,
  },

  container2: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 25,
    margin: 150,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: 'darkturquoise',
    paddingBottom: 5,
  },

  label: {
    padding: 10,
  },

  textinput: {
    width: 300,
    height: 40,
    borderWidth: 1.5,
    backgroundColor: 'gainsboro',
    borderRadius: 100,
    borderStyle: 'solid',
    borderColor: 'black',
    marginBottom: 10,
    paddingLeft: 10,
    // justifyContent: 'center',
    //alignItems: 'center',
  },

  loginbutton: {
    width: 300,
    height: 40,
    borderWidth: 1.5,
    backgroundColor: 'darkturquoise',
    borderRadius: 100,
    padding: 5,
    marginTop: 28,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'darkturquoise',
  },

  loginbuttontext: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
  }

});



export default Login;
