import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import SignIn from "../src/pages/signIn"
import SignUp from "../src/pages/signIn"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App(){
    return (
 <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
     </Stack.Navigator>
 </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tittle: {
        color: "#fff",
        fontSize: 40,
        fontWeight: 'bold',

    }
}) 