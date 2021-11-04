import React from 'react'
import { View, Text, StatusBar, SafeAreaView, StyleSheet, Pressable, Image, TouchableOpacity} from 'react-native'
import Input from '../components/Input'
import RadioInput from '../components/radio-input'
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
// import {
//     SelectMultipleButton,
//     SelectMultipleGroupButton
//   } from "react-native-selectmultiple-button";
  import Button from '../components/Button'
  

const OPTIONS = ['Male','Female']
//const interest = ['A','B', 'C ']

export default function create() {
    const [gender, setGender] = React.useState(null)
    const [image, setImage] = React.useState(null)

    React.useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Image,
          allowsEditing: true,
          aspect: [2, 2],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };
    
    return (
        <SafeAreaView>
        <StatusBar
        backgroundColor="black"
        />
        <View style={styles.margin}>
            <Text style={styles.title}>Create Employee</Text>
            <Pressable style={styles.circle} onPress={pickImage}>
                {image ?
                    <Image source={{uri: image}} style={{height: 150, width: 150, borderRadius: 75,}}/>
                    :
                    <AntDesign style={styles.plus} name="plus" size={50} color="#444443" />
                }
            </Pressable>

            <Input placeholder='Name'/>
            <Input placeholder='Age'/>
            <View style={{marginTop:20}}>
                <Text style={styles.margin}>Select gender</Text>
                {OPTIONS.map((option,index)=>(
                    <RadioInput 
                        key={index} 
                        label={option}
                        value={gender}
                        setValue={setGender}
                    />
                ))}
            </View>
            <Text style={styles.margin}>Select shifts</Text>
            <Text style={styles.multipleDays}>You can choose multiple days</Text>

            {/* <SelectMultipleButton
            buttonViewStyle={{
                borderRadius: 10,

                height: 40
            }}
            textStyle={{
                fontSize: 15
            }}
            highLightStyle={{
                borderColor: "gray",

                backgroundColor: "transparent",

                textColor: "gray",

                borderTintColor: 'blue',

                backgroundTintColor: 'blue',

                textTintColor: "white"
            }}
            multiple={true}
            value={interest}
            selected={this.state.multipleSelectedData.includes(interest)}
            singleTap={valueTap => this._singleTapMultipleSelectedButtons(interest)}
            />;

            <SelectMultipleGroupButton
            containerViewStyle={{
                justifyContent: "flex-start"
            }}
            highLightStyle={{
                borderColor: "gray",

                backgroundColor: "transparent",

                textColor: "gray",

                borderTintColor: 'blue',

                backgroundTintColor: "transparent",

                textTintColor: 'blue'
            }}
            onSelectedValuesChange={selectedValues =>
                this._groupButtonOnSelectedValuesChange(selectedValues)
            }
            group={multipleGroupData}
            />; */}
            <TouchableOpacity style={styles.buttonStyle}>
                <Button title='Done'/>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 20
    },
    margin: {
        margin: 10
    },
    multipleDays:{
        fontSize: 12,
        marginLeft: 10,
        marginTop: -10,
    },
    circle:{
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 75,
        borderColor: '#E3E3E3',
        height: 150,
        width: 150,
        backgroundColor: '#E3E3E3',
    },
    plus:{
        padding: 45,
    },
    buttonStyle:{
        alignItems: 'center',
        marginTop: 30,
    }
})
