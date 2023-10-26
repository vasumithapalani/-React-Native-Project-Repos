import React from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Button,ImageBackground} from 'react-native'
import {REGISTRATION_PAGE} from '../constant/Navigation';
import {LOGIN_PAGE} from '../constant/Navigation';
import {BOTTOM_TABS} from '../constant/Navigation';



const Home=({route,navigation})=>{

    const { username } = route.params || {};


    return(
     <View style={styles.container}>
       <View>
       <Button title="Go to Login Page" onPress={() => navigation.navigate(LOGIN_PAGE)}/>
       </View>

       <View>
       <Button title="Go to Registration Page" onPress={() => navigation.navigate(REGISTRATION_PAGE)}/>
      </View>

      <View>
      <Button title="Go to Dashboard" style={styles.cont} onPress={() => navigation.navigate(BOTTOM_TABS)}/>
      </View>

      <View>
          <Text> Welcome, {username}! </Text>
      </View>


     </View>
        
    
    )

}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
  
  });

  export default Home;