import React from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native'
import Button from '../components/Button'
import useFirebase from '../components/config'
import Input from '../components/Input'

export default function signup({navigation}) {
    
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    const [loding, setLoding] = React.useState(false)

    const {firebase} = useFirebase();
    console.log(email,password);

    const signupData= () => {
        //1. validate the  form

        //2.loding to  true
        setLoding(true)

        //console.log(email,password);

        firebase
            .auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
            console.log('RESPONSE --',response)
        }).catch((error) => {
            setLoding(false)
            console.log('error',error)
        }
    );

        //5. loding to false + validate any  error
    }

   console.log(firebase)
    
    return (
        <View>
            <ScrollView>
            <Input placeholder='Email' onChangeText={(text) => setEmail(text)}/>
            <Input placeholder='Password' onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>
            </ScrollView>
            
            {loding ?
                <ActivityIndicator/>
                :<Button 
                    title='Submit' 
                    customStyles={styles.customStyles}
                    onPress={signupData}
                />
            }

            <View>
                <Text style={styles.termsCondition}>
                By continuing, you accept the   
                <Text style={styles.textColor}>Terms of Use </Text> 
                and <Text style={styles.textColor}>Privacy Policy</Text>.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    margin:{
        marginBottom: 15,
        marginLeft: 15,
    },
    customStyles:{
        marginTop:25, 
        alignSelf:'center'
    },
    termsCondition:{
        marginTop: 45,
        marginBottom: 15,
        marginLeft: 15,
        fontSize: 12
    },
    textColor:{
        color:'#18B18D',
    },
})