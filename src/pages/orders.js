import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import Item from '../components/item/item';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TextInput,
  ImageBackground,
} from 'react-native';

export default function Orders() {
    const [menuAlmoco, setMenuAlmoco] = useState([]);
const [menuCafe, setMenuCafe] = useState([]);
  useEffect(
    () => {
      //funcao
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1bGxpQGRhdGEuY29tIiwiaWQiOjMzNTYsImlhdCI6MTY0MzY3NDMwNSwiZXhwIjoxNjc1MjMxOTA1fQ.CZgqh1mGGrY9nBYtI20n82oBhfFfBDifDI7eJtQAI2w';
      fetch('https://lab-api-bq.herokuapp.com/products', {
        headers: {
          accept: 'application/json',
          Authorization: `${token}`,
        },
      })
        .then(response => response.json())
        .then(json => {
          const breakfast = json.filter(item => item.type === 'breakfast');
          setMenuCafe(breakfast);
          const allDayMenu = json.filter(item => item.type === 'all-day');
          const allDaySlice = allDayMenu.slice(18, 24);
          const AllDayBurger = allDayMenu.slice(8, 10);
          const burguerAndAll = AllDayBurger.concat(allDaySlice);

          setMenuAlmoco(burguerAndAll);
          const allproducts = json;
          setListaCompletaDeProdutos(allproducts);
        });
    },
    [
      //condições
    ],
  );

  return (
      <>
      <View>
          { menuCafe.map((item, index)=>(
                 <Item
                 divClassName="container-food"
                 itemName={item.name}
                 >
       
       
                 </Item>
              
          ))}
       


      </View>
      
      
      </>

  );
  
}
