import React from 'react';
import { View, Text, Button } from 'react-native';
import { useCounter } from '../screens/CounterContext';



const CounterDisplay = () => {


  const { count } = useCounter();

  return <Text>Count: {count}</Text>;

};



const CounterControls = () => {


  const { increment, decrement } = useCounter();

  return (

    <View>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
    
  );
};



export { CounterDisplay, CounterControls };
