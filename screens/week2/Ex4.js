import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex4() {
  return (
    <View style={{ flex : 1 , flexDirection : 'column' }}>    
      <View style={{
width: 100, height: 100, 
backgroundColor: '#50E3C2'}} />
<View style={{
width: 100, height: 100, 
backgroundColor: '#4A90E2'}} />
<View style={{
width: 100, height: 100, 
backgroundColor: '#9013FE'}} />
</View>
  );
}
