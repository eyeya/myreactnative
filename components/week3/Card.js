import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button, Image, } from 'react-native';

export default function Crad() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection : "row", padding : 10}}> 
                <Image style={{width :50 , height : 50 , borderRadius : 50/2 }} source={require('../../assets/week3/profile-2.jpg')} />
                <View style={{ paddingLeft : 10}}>
                    <Text style={{ fontSize : 20}}>Steve Garrett</Text>
                    <Text style={{ color : "gray"}}>5 hours ago | 100k views</Text>
                </View>
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 6/2 }} source={require('../../assets/week3/trip-2.jpg')} />
            </View>
            <View style={{ padding : 10}}>
                <Text>Overseas Adventure Travel In Nepal</Text>
                <Text>Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo</Text>
            </View>
        </View>
    );
}
