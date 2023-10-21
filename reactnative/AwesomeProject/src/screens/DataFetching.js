import React,{useState,useEffect} from 'react'
import { TouchableOpacity,Text,View,Button,StyleSheet } from 'react-native';

const DataFetching=()=>{

        const [data, setData] = useState(null);
      
        useEffect(() => {
          
          fetch('https://jsonplaceholder.typicode.com/todos/1')

            .then((response) => response.json())

            .then((data) => {
              setData(data);
            });

        }, []);

        return (
            <View>
              {data ? (
               
               <View>
                  <Text>Title: {data.title}</Text>

                  {data.userId !== null ? (
                    <Text>UserID: {data.userId}</Text>
                  ) : (
                    <Text>UserID is not available to fetch</Text>
                  )}
                </View>

              ) : (
                <Text>Loading data</Text>
              )}
            </View>
          );

    }

    export default DataFetching
