import * as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Create from './src/screens/create';
import Update from './src/screens/update';
import Login from './src/screens/login';
import Signup from './src/screens/signup';

const Stack = createNativeStackNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};


function App(){
  const [user, setUser] = React.useState(true)

  return(
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {
          user ? (
            <>
            
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='Create' component={Create} options={{headerShown:false}}/>
            <Stack.Screen name='Update' component={Update}/>
          </>
          ) : (
            <>
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='Signup' component={Signup}/>
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;