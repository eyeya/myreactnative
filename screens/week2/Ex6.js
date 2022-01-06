import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";
import { useNavigation } from "@react-navigation/native"; 

export default function Ex6() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#50E3C2",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#4A90E2",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#9013FE",
        }}
      />
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex7")} />
</View>
  );
}
