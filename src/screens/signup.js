import React from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native'
import Button from '../components/Button'
import firebase from '../components/config'
import Input from '../components/Input'

<<<<<<< HEAD
export default function signup() {
    
=======
export default function signup({navigation}) {
>>>>>>> e8ae551e466b86bbfe892e1905a1036fb1f9dad3
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    const [loding, setLoding] = React.useState(false)

    // const {firebase} = useFirebase();
    // console.log(email,password);

<<<<<<< HEAD
    const signup= () => {
=======
    // const email1="test1235@gamil.com"
    // const pass="test123456"

    const submit= () => {
>>>>>>> e8ae551e466b86bbfe892e1905a1036fb1f9dad3
        //1. validate the  form

        //2.loding to  true
        setLoding(true)

        //console.log(email,password);
console.log('1');
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
            console.log('RESPONSE --',response)
console.log('2');
            // const  uid = response.user.uid

            // const userProfileData ={
            //     id: uid,
            //     name: name,
            //     age: age,
            //     email: email,
            //     gender: gender,
            // }
            // const userRef = firebase.firestore().collection("users");
            // userRef.doc(uid).set(userProfileData);

            // setLoding(false)
            // navigation.navigate('Home')
            
        }).catch((error) => {
            setLoding(false)
            console.log('3');
            console.log('error',error)
        }
    );

        //5. loding to false + validate any  error
    }

//    console.log(firebase)
    
    return (
        <View>
            <ScrollView>
            <Input placeholder='Email' onChangeText={(text) => setEmail(text)}/>
            <Input placeholder='Password' onChangeText={(text) => setPassword(text)} secureTextEntry={true}/>
            </ScrollView>
            
            {/* {loding ?
                <ActivityIndicator/>
                :<Button 
                    title='Submit' 
                    customStyles={styles.customStyles}
                    onPress={submit}
                />
            } */}
            <Button 
                    title='Submit' 
                    customStyles={styles.customStyles}
                    onPress={submit}
                />
<<<<<<< HEAD
            }
=======
>>>>>>> e8ae551e466b86bbfe892e1905a1036fb1f9dad3

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