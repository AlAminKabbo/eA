import React from 'react'
import { View, Text, SafeAreaView, Image, StatusBar, TextInput,StyleSheet } from 'react-native'

export default function login() {
    return (
        <SafeAreaView>
        <StatusBar
        backgroundColor="#18B18D"
        />
        <View >
            <Image source={require('../../assets/login-image.png')} style={{alignSelf:'center'}}/>
            <Text style={{textAlign:'center', fontSize: 18, fontWeight:'bold'}}>Never forget your notes</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
        </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    input:{
        borderBottomWidth: 2,
        borderBottomColor: '#BBBBBB',
        padding: 10,
        margin: 20,
    }
})

