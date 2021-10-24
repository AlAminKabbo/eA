import * as React from 'react';
import {View, Text} from 'react-native';
import  {NavigationContainer} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Create from './src/screens/create';
import Update from './src/screens/update';
import Login from './src/screens/login';
import Signup from './src/screens/signup';

const Stack = createNativeStackNavigator();

function App(){
  const [user, setUser] = React.useState(false)

  return(
    <NavigationContainer>
      <Stack.Navigator>
        {
          user ? (
            <>
            <Stack.screen name='Home' component={Home}/>
            <Stack.screen name='Create' component={Create}/>
            <Stack.screen name='Update' component={Update}/>
          </>
          ) : (
            <>
            <Stack.screen name='Login' component={Login}/>
            <Stack.screen name='Signup' component={Signup}/>
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
