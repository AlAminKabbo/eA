import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
export default function Input({
  placeholder,
  onChangeText,
  secureTextEntry,
  value,
}) {
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.Input}
        secureTextEntry={secureTextEntry}
        value={value}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Input: {
    borderBottomWidth: 2,
    borderBottomColor: "#BBBBBB",
    padding: 10,
    margin: 20,
  },
});
