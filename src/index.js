import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Login from "./pages/login"
import SignUp from "./pages/signUp"
import Orders from "./pages/orders"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App(){
    return (
 <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Orders" component={Orders} />
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