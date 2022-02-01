import React from 'react';
import {
    View,
    Text,
    Button,
  } from 'react-native';
function Item({
  divOnClick,
  divClassName,
  divKey,
  divName,
  divId,
  divPrice,
  itemName,
  itemPrice,
  itemNameKey,
  itemPriceKey,
  itemFlavor,
  itemComplement,
  ImgSrc,
}) {
  return (
    <>
      <View className={divClassName} key={divKey} name={divName} id={divId} price={divPrice}>
        <View>
         
        </View>
        <Text className="divName" key={itemNameKey}>{itemName}</Text>
        <View className="divButton">
          <Text className="divPrice" key={itemPriceKey}> {divId} R${itemPrice},00</Text>
          <Text className="divFlavor"> {itemFlavor}</Text>
          <Text className="divComplement"> {itemComplement}</Text>
        </View>
      </View>
    </>
  );
}
export default Item;