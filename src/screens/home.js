import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Button from '../components/Button'

export default function home({navigation}) {
    const navigateToCreate = () =>{
        navigation.navigate('Create')
    }

    return (
        <View>
            <Text style={styles.title}>My Employee</Text>
            <View style={{alignItems:'center', justifyContent:'center', marginTop: 200}}>
                <Image source={require('../../assets/emptyEmployee.png')} />
                <Text style={{textAlign:'center', fontSize: 14, fontWeight:'bold'}}>Sorry you do not have  employees</Text>
                <Button title="Add an employee" customStyles={styles.customStyles} onPress={navigateToCreate}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        margin: 20,
    },
    customStyles:{
        marginTop:25, 
        alignSelf:'center'
    },
    
})
