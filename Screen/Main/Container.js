
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React from 'react'

export default function Container({ value, onChangeText,refSet, placeholder, secureTextEntry,keyboardType,onSubmitEditing,editable ,returnKeyType}) {
  return (

    <View style={styles.coloum}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#979797'}
        value={value}
        ref={refSet}
        onSubmitEditing={onSubmitEditing}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={editable}
        returnKeyType={returnKeyType}
        style={{ fontSize: 20 }}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  coloum: {
    marginHorizontal: 20,
    borderColor: "#e2e6ea",
    borderWidth: 1,
    marginVertical: 6,
    backgroundColor: "white",

    borderRadius: 5,
    paddingHorizontal: 15,

  }
})