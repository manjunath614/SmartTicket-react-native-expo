import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, Alert,Button,Image, TextInput,TouchableOpacity, ImageBackground} from "react-native";
import Constants from 'expo-constants';
import Btn from "../components/Btn";
import { background, btnColor } from "../components/Constants";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const AllScreens =({route}) =>{
    
    const id = route.params.ID;
    const Flag = route.params.flag;
    
    const navigation = useNavigation();
    const Profile = ()=>{
navigation.navigate('lekpayProfile');
    }
    
const ScannerAsset = () =>{
    navigation.navigate('Capture Asset');
}
const checkTickets = () =>{
    navigation.navigate('Check Tickets');
}
const issueTickets =() =>{
    navigation.navigate('Issue Tickets');
}
const cashHandler=() =>{
    navigation.navigate('Cash Handler');

}
    return(
        <View style={styles.body}>
            <StatusBar hidden={false} style="dark" backgroundColor='#F9E5F3'  />
           
            {/* <Btn
            
             textColor="white"
             bgColor={btnColor}
             btnLabel="Go to Profile"
             Press={Profile}
            /> */}
             {/* <Btn
             textColor="white"
             bgColor={btnColor}
             btnLabel="Issue Tickets"
             Press={issueTickets}
            /> */}
            {/* <Btn
             textColor="white"
             bgColor={btnColor}
             btnLabel="Asset Capture"
             Press={ScannerAsset}
            /> */}
            
            {/* <Btn
             textColor="white"
             bgColor={btnColor}
             btnLabel="Go to Validate"
             Press={checkTickets}
            /> */}
           
           
           
            {/* <Btn
             textColor="white"
             bgColor={btnColor}
             btnLabel="Go to Cash Handler"
           
            /> */}
             <Text>Conductor Screens</Text>
            <View style={styles.card}> 
            
            <TouchableOpacity onPress={Profile}>
            <Image style={styles.icon} resizeMode='contain'
            source={require('../assets/LekPay-Profile.png')}
            /><Text style={styles.text}>Profile</Text>
           </TouchableOpacity>

           

           <TouchableOpacity onPress={ScannerAsset}>
            <Image style={styles.icon} resizeMode='contain'
            source={require('../assets/LekPay-Asset.png')}
            />
            <Text style={styles.text}>Asset</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={checkTickets}>
            <Image style={styles.icon} resizeMode='contain'
            source={require('../assets/LekPay-CheckTicket.png')}
            />
            <Text style={styles.text}>Validate</Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={issueTickets}>
            <Image style={styles.icon} resizeMode='contain'
            source={require('../assets/LekPay-Ticket.png')}
            />
            <Text style={styles.text}>Tickets</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={cashHandler}>
            <Image style={styles.icon} resizeMode='contain'
            source={require('../assets/LekPay-Cash.png')}
            />
            <Text style={styles.text}>Cash</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('ChangePasswordConductor',{
             ID : id,
             flag: Flag
           })}>
            <Image style={styles.icon} resizeMode='contain'
            source={require('../assets/LekPay-ResetPwd.png')}
            />
            <Text style={styles.text}>Password</Text>
           </TouchableOpacity>
            </View>


             <Text>Checker Screens</Text>


             <View style={styles.card}>
                <TouchableOpacity onPress={()=>navigation.navigate('Map Asset')}>
                <Image style={styles.icon} resizeMode='contain'
                source={require('../assets/LekPay-Asset.png')}
                />
                <Text style={styles.text}>Asset</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <Image style={styles.icon} resizeMode='contain'
                source={require('../assets/LekPay-Profile.png')}
                />
                <Text style={styles.text}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Report')}>
                <Image style={styles.icon} resizeMode='contain'
                source={require('../assets/LekPay-Report.png')}
                />
                <Text style={styles.text}>Report</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Check')}>
                <Image style={styles.icon} resizeMode='contain'
                source={require('../assets/LekPay-CheckTicket.png')}
                />
                <Text style={styles.text}>Validate</Text>
                </TouchableOpacity>

                

             </View>
        </View>
    )
}
const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: 'center',
     // justifyContent: "center",
      backgroundColor:background,
      //paddingHorizontal:20
      //marginTop:Constants.statusBarHeight
    },
    parent:{
        backgroundColor:'red',
     width:"100%",
     padding:12,
     flexDirection:'row'
    },
    card: {
        
        width:"90%",
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor: '#ffffff',
        borderRadius: 9,
        padding: 16,
        margin: 8,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      icon:{
        aspectRatio:1,
        width:50,
        height:50,
        alignSelf:'center'
      },
      text:{
        textAlign:'center',
        fontSize:12,
        
      }
});
export default AllScreens;