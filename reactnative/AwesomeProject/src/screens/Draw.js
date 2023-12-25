import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Image, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux';

const Draw = ({ navigation }) => {

    //  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);


    return (


        <View style={{ flex: 1, }}>

            <ImageBackground source={require('../../art.jpeg')} resizeMode="cover" style={{ width: '100%', height: '100%' }}>

                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 35,
                            fontStyle: 'italic'
                        }}>
                        Welcome
                    </Text>
                    <Text style={{
                        color: 'black',
                        fontSize: 35,
                        fontStyle: 'italic'
                    }}
                    >
                        To
                    </Text>
                    <Text style={{
                        color: 'black',
                        fontSize: 35,
                        fontStyle: 'italic'
                    }}
                    >
                        VirtualDraw
                    </Text>
                </View>

            </ImageBackground>

        </View>

    )
}

export default Draw;