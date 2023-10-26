import React from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Button,ImageBackground} from 'react-native'
import { UserContext } from '../../App';
import { useContext } from 'react'

const ComponentE=()=>{

    const data = useContext(UserContext);

    return(

        <View>
           
            <Text>Hello {data}</Text>

        </View>
    );
}

export default ComponentE


/*
Using Consumer:

<View>
<UserContext.Consumer>
{
    name=>{
        return (
            <View>
                <Text>
                  Hello {name}!
                </Text>
            </View>
        )
    }
</UserContext.Consumer>

 }*/