import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";


export default function SignIn(){
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#3112e3"></StatusBar>
        <View style={styles.container}>
            <Text>SIGNIN</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#79c1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tittle: {
        color: "#fff",
        fontSize: 40,
        fontWeight: 'bold',

    }
}) 