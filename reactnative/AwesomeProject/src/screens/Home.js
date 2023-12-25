import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Image, ImageBackground } from 'react-native'
import { REGISTRATION_PAGE } from '../constant/Navigation';
import { LOGIN_PAGE } from '../constant/Navigation';
import { BOTTOM_TABS } from '../constant/Navigation';



const Home = ({ navigation }) => {

  // const { username } = route.params || {};

  return (

    <View style={{

      flex: 1,
      flexDirection: 'column'
    }
    }>


      <View style={{

        flexDirection: 'row',
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'space-between'

      }}>

        <View style={{
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 13
        }}>
          <View>
            <Image source={require('../../drawicon.png')} style={{ width: 50, height: 50 }} />

          </View>

          <View style={{
            justifyContent: 'center',

          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 24,
              color: 'black',
              //fontFamily :'timenewroman'
              fontStyle: 'italic',


            }}>
              VirtualDraw
            </Text>

          </View>

        </View>


        <View style={{
          flexDirection: 'row',
        }}>

          <View style={{
            paddingRight: 30
          }}>

            <TouchableOpacity style={styles.loginbutton} onPress={() => navigation.navigate(LOGIN_PAGE)}><Text style={styles.loginbuttontext}>Log In</Text></TouchableOpacity>

          </View>




          <View style={{
          }}>

            <TouchableOpacity style={styles.registerbutton} onPress={() => navigation.navigate(REGISTRATION_PAGE)}><Text style={styles.registerbuttontext}>Sign up</Text></TouchableOpacity>

          </View>

        </View>


      </View>



      <View style={{ flex: 1, }}>

        <ImageBackground source={require('../../draw.jpeg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>


          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            //justifyContent :'space-between'
          }}>


            <View style={{ paddingBottom: 40 }}>
              <Text style={{ fontSize: 28, fontStyle: 'italic', color: 'black' }}>
                Unleash Your Creativity with VirtualDraw
              </Text>
            </View>


            <View style={{ paddingBottom: 48 }}>

              <Text style={{ fontSize: 20, fontStyle: 'italic', color: 'black' }}>
                Explore the World of Digital Art - Where Imagination Knows No Boundaries
              </Text>

            </View>


            <View style={{
              paddingBottom: 40
            }}>

              <TouchableOpacity style={styles.signupbutton} onPress={() => navigation.navigate(REGISTRATION_PAGE)}><Text style={styles.signupbuttontext}>Sign up for Free</Text></TouchableOpacity>

            </View>


            <View>


            </View>

          </View>


        </ImageBackground>


      </View>





    </View>


  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },


  loginbutton: {
    width: 120,
    height: 35,
    borderWidth: 1,
    backgroundColor: 'darkturquoise',
    //borderRadius: 100,
    padding: 2,
    margin: 7,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'darkturquoise',

  },

  loginbuttontext: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },


  registerbutton: {
    width: 130,
    height: 35,
    borderWidth: 1.5,
    backgroundColor: 'indigo',
    //borderRadius: 100,
    padding: 2,
    margin: 7,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'indigo',

  },

  registerbuttontext: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,

  },

  signupbutton: {
    width: 180,
    height: 50,
    borderWidth: 1.5,
    backgroundColor: 'darkblue',
    borderRadius: 100,
    padding: 5,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'darkblue',
  },

  signupbuttontext: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    borderStyle: 'solid',
    borderColor: 'black',
  }

});

export default Home;