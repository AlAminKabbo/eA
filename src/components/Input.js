import React from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'

export default function Input({placeholder}) {
    return (
        <View>
            <TextInput 
            style={styles.Input}
            placeholder={placeholder}
            autoCorrect={false}
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
