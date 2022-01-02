import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, StatusBar, Button} from "react-native";


export default function SignIn({ navigation}){
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#3112e3"></StatusBar>
        <View style={styles.container}>
            <Text>SIGNIN</Text>
            <Button
            title="Login"
            onPress={ () => navigation.navigate("SignUp")}
            >Login</Button>
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