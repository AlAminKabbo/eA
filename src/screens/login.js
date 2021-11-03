import React from 'react'
import { View, Text, SafeAreaView, Image, StatusBar, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'

export default function login({navigation}) {
    const navigateToSignUp = () =>{
        navigation.navigate('Signup')
    }

    return (
        <SafeAreaView>
        <StatusBar
        backgroundColor="#18B18D"
        />
        <View >
            <Image source={require('../../assets/login-image.png')} style={{alignSelf:'center'}}/>
            <Text style={{textAlign:'center', fontSize: 18, fontWeight:'bold'}}>Never forget your notes</Text>
            
            <Input placeholder='Email'/>
            <Input placeholder='Password'/>
            
            <Button 
                title="Login" 
                customStyles={styles.customStyles}
            />

            <TouchableOpacity onPress={navigateToSignUp} style={styles.text}>
                <Text>Don't have an account? <Text> </Text>
                <Text style={styles.signup}>Signup</Text>
                </Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    text:{
       alignItems:'center',
       marginTop: 5, 
    },
    signup:{
        color:'#18B18D',
    },
    margin:{
        marginTop:5,
    },
    customStyles:{
        marginTop:25, 
        alignSelf:'center'
    }
})

