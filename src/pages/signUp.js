import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";


export default function SignUp(){
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#3112e3"></StatusBar>
        <View style={styles.container}>
            <Text>SIGNUP</Text>
        </View>
        </>
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