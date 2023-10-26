import React, { useState } from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';

const Pressablee = () => {

  const [isPressed, setIsPressed] = useState(0);

  const WhenPressIn = () => {
    setIsPressed(1);
  };

  const WhenPressOut = () => {
    setIsPressed(0);
  };


  return (
    <View style={styles.container1}>
      <Pressable
        style={{
          backgroundColor: isPressed ? 'blue' : 'red',
          padding: 16,
          borderRadius: 10,
        }}
        onPressIn={WhenPressIn}
        onPressOut={WhenPressOut}

      >
        <Text style={{ color: 'white' }}>Press the Button</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

    container1:{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    },
});

export default Pressablee;
