import React, { useState, useEffect } from 'react';
import { View, Text, Button,ScrollView, } from 'react-native';



const UpdateRequest = () => {

    const [data, setData] = useState(null);
  
    const fetchTheData = async () => {
   

        try{


            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            
    
              "title": "repellat provident occaecati excepturi optio reprehenderit"
            
            })
        });

   
        console.log('response......', JSON.stringify(response))

        if (response.ok) {
         

            const data = await response.json();

            setData(data);

        }
        else{
             
            console.log("Error while fetching data")
        }

          console.log('Data......', JSON.stringify(data))
        }

       catch (error) {
        console.error('Login failed:', error.message)
  
      }
    }

    
    useEffect(() => {
      fetchTheData();
    }, []);
  

    return (
      <View>
        <Text>UPDATE Request Result:</Text>
        <ScrollView>
        <Text>{JSON.stringify(data,null,2)}</Text>
        </ScrollView>
       
      </View>
    );
  };
  
  export default UpdateRequest;