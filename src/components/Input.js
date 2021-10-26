import React from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'

export default function Input({placeholder, onChangeText, secureTextEntry = false}) {
    return (
        <View>
            <TextInput 
            style={styles.Input}
            placeholder={placeholder}
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    Input:{
        borderBottomWidth: 2,
        borderBottomColor: '#BBBBBB',
        padding: 10,
        margin: 20,
    }

})
