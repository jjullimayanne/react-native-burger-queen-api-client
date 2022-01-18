import { NavigationContainer } from "@react-navigation/native";
import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import Background from '../images/login_background.png'

import { View, Text, StyleSheet, StatusBar, Button, TextInput, ImageBackground} from "react-native";



export default function Login({ navigation}){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [visibleInput, setVisibleInput] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function loginBtn(e) {
        e.preventDefault();
        if (email === '' || password === '') {
          setVisibleInput(true);
        } else {
          fetch('https://lab-api-bq.herokuapp.com/auth', {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${email}&password=${password}`,
          })
            .then((response) => response.json())
            .then((json) => {
              const { token } = json;
              const { id } = json;
              const tokenUser = localStorage.setItem('token', token);
              const idUser = localStorage.setItem('id', id);
              console.log(token)
    
              if (tokenUser !== null && idUser !== null && json.role === 'cozinha') {
                kitchen();
              } else if (tokenUser !== null && idUser !== null && json.role === 'salao') {
                saloon();
              } else {
                setIsModalVisible(true);
              }
            });
        }
      }
  
    
    return (
        <>
         <ImageBackground source={require('../images/login_background.png')} resizeMode="cover"  style={{width: '100%', height: '100%'}}>
         <View style={styles.container}>
            <Text>Krust Krab</Text>

           <TextInput
            placeholder="Digite seu E-mail"
          
            onChangeText={(event) => setEmail(event.target.value)}
           >

           </TextInput>
           <TextInput
            placeholder="Digite sua senha"
            inputOnChange={(event) => setPassword(event.target.value)}
           >

           </TextInput>

            <Button
            title="Login"
            onPress={ () => navigation.navigate("SignUp")}
            >Login</Button>
        </View>
    </ImageBackground>
        <StatusBar barStyle="light-content" backgroundColor="#3112e3"></StatusBar>
      
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 20,
        marginLeft: 40,
        width: 300,
        height: 400,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'auto',
        marginRight:'auto',
    },
    tittle: {
        color: "#fff",
        fontSize: 40,
        fontWeight: 'bold',

    },
      image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    
  },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#4545'
      },
}) 