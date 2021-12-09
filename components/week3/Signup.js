import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Signup() {
    return (
        <View style={{ flex: 1,   alignItems: 'stretch', pedding: '10' }}>
            <TextInput style={{fontSize : 20 , marginTop : 10}} placeholder="Input ID" />
            <TextInput style={{fontSize : 20 , marginTop : 10}}placeholder="Input E-mail" />
            <TextInput style={{fontSize : 20 , marginTop : 10}} placeholder="Input Address" />
            <Button title="Sign up" color="red" />
        </View>
    );
}
