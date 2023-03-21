import React from "react";
import { useState,useEffect } from "react";

import {StyleSheet,View,Text} from "react-native";


const Screen_B = () => {

   


   
  return(

    <View style={styles.container}>
       <Text>ScreenB</Text>
      
    </View>
  );

  
}

const styles = StyleSheet.create({

 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
 }


});
export default Screen_B;