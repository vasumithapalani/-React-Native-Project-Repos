
/*
in Login:

 const submitFunc=async()=>{


  if(username==="vasumitha@gmail.com" && password==="vasu@456")
  {
    alert("Login Successful")
   
    dispatch(login());
  }

  else
  {
   alert("Login Failed.Please Enter the valid Credentials.")
  }

}

if (!response.ok) {
      throw new Error('Invalid credentials');
    }



in Register:

<View>
 <Text>Initial param: itemId - {id}</Text>
  </View>



in App :


<Provider store={store}>

    <NavigationContainer>
  
       <RootNavigator/>

    </NavigationContainer>
  
    </Provider>

in home page :

       // const { username } = route.params || {};

     <View>
          <Text> Welcome, {username}! </Text>
      </View>

      <View>
      <Button title="Go to Dashboard" style={styles.cont} onPress={() => navigation.navigate(BOTTOM_TABS)}/>
      </View>

      
Stack:


<Stack.Navigator initialRouteName={LOGIN_PAGE}>
      
      <Stack.Screen name='LoginStack' component={ LoginStack}/>
      <Stack.Screen name='DashboardStack' component={DashboardStack}/>  
    
    </Stack.Navigator>
  
   
Redux:


export const UserContext=createContext()


const FirstComponent=()=>{

  return (

    <SecondComponent/>

  )

}


const SecondComponent=()=>{

  const count=useSelector(state=>state.reducer.count)

  return (

    <Text style={{fontSize:30}}>Count: {count}</Text>
  )
  
}

const App = () => {

   const dispatch=useDispatch();
  
   const incrementtheValue=()=>{
      
    dispatch({
      
      type:'increment',

    })

   }

  return (
    <View>

    <FirstComponent/>

    <TouchableOpacity style={styles.button} onPress={incrementtheValue}><Text style={styles.buttontext}>Increment</Text></TouchableOpacity>

 </View>

    
  )
  }




*/



/*
Consumer:

export const UserContext=createContext()

 
    <UserContext.Provider value={'Vasumitha'}>
      <ComponentC/>
    </UserContext.Provider>



Stack Navigation:

    <NavigationContainer>
    <Stack.Navigator initialRouteName={HOME_PAGE}
    screenOptions={{
     headerStyle: {
       backgroundColor: 'grey',
     },
     
     headerTintColor: '#fff',

     headerTitleStyle: {
       fontWeight: 'bold',
     },
   }} >
   <Stack.Screen name={HOME_PAGE} component={Home}/>
    <Stack.Screen name={LOGIN_PAGE} component={Login}/>
    <Stack.Screen name={REGISTRATION_PAGE} component={Register} initialParams={{id:66}}/>
    <Stack.Screen name={BOTTOM_TABS} component={MaterialTopTabNav}/>
    </Stack.Navigator>
    </NavigationContainer>



Stack Navigation
<Stack.Navigator initialRouteName={REGISTRATION_PAGE}
       screenOptions={{
        headerStyle: {
          backgroundColor: 'grey',
        },
        
        headerTintColor: '#fff',

        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
       >
       <Stack.Screen name={LOGIN_PAGE} component={Login}  options={{title: ''}}/>
       <Stack.Screen name={REGISTRATION_PAGE} component={Register} initialParams={{id:66}} options={({route})=>({title:route.params.name})}/>
       <Stack.Screen name={MY_TABS} component={MyTabs}/>
       </Stack.Navigator>*/


/*
Provider:

<CounterProvider>

    <View style={styles.container}>

      <CounterDisplay />

      <CounterControls />
    
    </View>

  </CounterProvider>




Bottom Tab Navigation :

      <NavigationContainer>
       <Stack.Navigator initialRouteName={HOME_PAGE}
       screenOptions={{
        headerStyle: {
          backgroundColor: 'grey',
        },
        
        headerTintColor: '#fff',

        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} >
      <Stack.Screen name={HOME_PAGE} component={Home}/>
       <Stack.Screen name={LOGIN_PAGE} component={Login}/>
       <Stack.Screen name={REGISTRATION_PAGE} component={Register} initialParams={{id:66}}/>
       <Stack.Screen name={BOTTOM_TABS} component={BottomTabNav}/>
       </Stack.Navigator>
       </NavigationContainer>
       

*/ 
