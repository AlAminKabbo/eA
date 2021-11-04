import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'

export default function RadioInput({label,value,setValue}) {
    const  isSelected = value === label;
    return (
        <TouchableOpacity onPress={()=> setValue(label)}>
            <View style={styles.container}>
                <View style={[styles.outerCircle, isSelected && styles.newOuterCircle]}>
                    <View style={[styles.innerCircle, isSelected && styles.newInnerCircle]}>
                    </View>
                </View>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems:"center",
        marginBottom: 15,
        marginLeft:15,
    },
    outerCircle:{
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'#ccc',
        justifyContent:'center',
        alignItems:'center',
    },
    innerCircle:{
        height: 10,
        width: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        justifyContent:'center',
        alignItems:'center',
    },
    label:{
        marginLeft: 18,
        fontWeight: 'bold',
    },
    newOuterCircle:{
        borderColor:'#D87D4A'
    },
    newInnerCircle:{
        borderColor:'#D87D4A', 
        backgroundColor:'#D87D4A'
    }

})