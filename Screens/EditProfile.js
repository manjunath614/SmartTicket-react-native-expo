import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View,Image, ToastAndroid, ScrollView, TouchableOpacity } from "react-native";
import { background, btnColor } from "../components/Constants";
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-paper";
import { EditprofileApi } from "./Api";
import Field from "../components/Field";
import { Picker } from "@react-native-picker/picker";
import Btn from "../components/Btn";


const EditProfile =({route}) =>{
    const data = route.params.data;
    
    const navigation = useNavigation();
    
    const [name,setName] = useState('');
    const [gender,setGender] = useState('');
    const [mobile,setMobile] = useState('');
    const [Dob,setDob] = useState('');
    const [address1,setAddress1] = useState('');
    const [address2,setAddress2] = useState('');
    const [city,setCity] = useState('');
    const [pin,setPin] = useState('');
    const [aadhar,setAadhar] = useState('');

    const [image,setImage]  = useState('https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1371229056.1675413808&semt=sph');
    const [profilepic,setProfilePic] = useState(false);
    const [hasPermission,setHasPermission] = useState(); 

    
    
    useEffect(()=>{
  
        (async()=> {
          const mediaPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
          setHasPermission(mediaPermission.status ==="granted");
        } 
        )();
        setName(data.Uname);
        setGender(data.Ugender);
        setMobile(data.Umobile);
        setDob(data.UDoB);
        setAddress1(data.UAddr1);
        setAddress2(data.UAddr2);
        setCity(data.Ucity);
        setPin(data.UPinCode);
        setAadhar(data.Uaadhar);
        if(data.Uphoto != ''){setImage(data.Uphoto);}
        else{setImage('https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1371229056.1675413808&semt=sphyyy')}
      
      },[]);
        
      if(hasPermission === undefined){
        return <View style={styles.container1}>
        <Text>Requesting for Permissions.</Text>
        {Alert.alert('Alert!','Permissions being requested',[{text:'Continue'}])}
       </View>
      }else if(!hasPermission){
        //return <Text>Enable Permission</Text>
       return <View style={styles.container1}>
        <Text>Please provide Permission in settings and Restart.</Text>
        {Alert.alert('Alert!','Permissions of gallery not granted!',[{text:'OK'}])}
       </View>
      }
         
      const pickImage= async () =>{  
         let result= await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          aspect:[4,3],
          allowsEditing:true,
          quality:1
          
        });
        
      if(result){
          setImage(result.assets[0].uri);
          setProfilePic(true);
          
        }
      }  
        const openCamera = async () => {
          // Ask the user for the permission to access the camera
          const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
      
          if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
          }
    
          const result = await ImagePicker.launchCameraAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            aspect:[4,3],
            allowsEditing:true,
            quality:1
          });
  
          if (result) {
            setImage(result.assets[0].uri);
            setProfilePic(true);
           
          }
      }
      
      const openDialog = () =>{
        Alert.alert('Choose Image!!','Select from either Camera roll or Camera',[{text:'open camera',onPress:openCamera},{text:'Open Camera Roll',onPress:pickImage},{text:'Remove Profile Picture',onPress:removeProfile}],{cancelable:true})
       
      }
      const removeProfile = ()=>{
        //setImage('https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1371229056.1675413808&semt=sph');
        setProfilePic(false);
        setImage('https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1371229056.1675413808&semt=sph')
        ToastAndroid.show('Profile pic removed',ToastAndroid.LONG)
      }
          

      const onPressSave = async()=>{
       if(image == '')
       {setImage('https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1371229056.1675413808&semt=sph')}
        await EditprofileApi({
            "flag":data.Flag,
            "Id":data.UserId,
            "Name":name,
            "Gender":gender,
            "City":city,
            "Aadhar":aadhar,
            "Pin":pin,
            "Address1":address1,
            "Address2":address2,
            "Img":image
        })
        .then(res=>{console.log(res.data.message)
        if(res.data.message == 'Edit Success'){
            alert('Profile Changed!!');
            navigation.navigate('Screen_A');
        }
        })
        .catch(error=>{console.log(error)
        alert(error)})
      }
      
    return(
        <ScrollView style={{backgroundColor:'#FFFFFF' ,flex:1}}>
        <View style={styles.body}>
            {console.log('link of img to be sent',image)}
            {console.log('data in edit',data)}
             {  
           
       
            
            image && <View><Image resizeMode='contain' source={{uri:image}} style={styles.image}/>
             <View style={{backgroundColor:'pink',position:'absolute',right:1,bottom:1,padding:11,borderRadius:100}}><Ionicons name='camera' size={28} color="black" onPress={openDialog}/></View>
            </View>

            }
            <View style={styles.parent}>
           <View elevation={5} style={{backgroundColor:background,padding:35,borderRadius:15,
            width:"70%",}}>
           <View style={styles.container}>
            <Text style={styles.text}>Name</Text>
            <Field
             width="100%"
             value={`${(name)}`}
             editable={true}
             placeholder="Name" 
           onChangeText={(value)=>setName(value)}
            />
            </View>
            <View style={[styles.container,{height:40},]}>
            <Text style={styles.text}>Gender</Text>
            { <Picker
              itemStyle={{height:40}}
              value={` ${(gender)}`}
              selectedValue={gender}
              //selectedValue='Male'
              onValueChange={(value, index) => setGender(value)}
              mode="dropdown" // Android only
              style={styles.picker}
            >
              <Picker.Item style={styles.pickerItem} label="Select Gender" value="Unknown" />
              <Picker.Item style={styles.pickerItem} label="Male" value="Male" />
              <Picker.Item style={styles.pickerItem} label="Female" value="Female" />
              <Picker.Item style={styles.pickerItem} label="Others" value="NA" />
            </Picker> }

            </View>
            <View style={styles.container}>
            <Text style={styles.text}>Mobile</Text> 
            <Field width="100%"
            value={`${(mobile)}`}
             editable={false}
            keyboardType="numeric"
         placeholder="Mobile Number" 
       // onChangeText={(value)=>setNumber(value)}
            />
            </View>
            <View style={styles.container}>
         
         <Text style={styles.text}>DOB</Text>
                   <Field 
                   value= {`${(Dob)}`}
                placeholder={"DOB"}
              width="57%"
             editable={false}
                />
                </View>

          
            
         
            <View style={styles.container}>
            <Text style={styles.text}>Adress 1</Text> 
            <Field width="100%"
             value= {`${(address1)}`}
             editable={true}
            placeholder="Address line 1" 
            multiline={true}
            
          onChangeText={(value)=>setAddress1(value)}
               />

            </View>
            <View style={styles.container}>
            <Text style={styles.text}>Adress 1</Text>  
            <Field width="100%"
             value= {`${(address2)}`}
             editable={true}
            placeholder="Address line 2" 
            multiline={true}
            
          onChangeText={(value)=>setAddress2(value)}
               />

            </View>
            <View style={styles.container}>
            <Text style={styles.text}>City</Text>   
            <Field width="100%"
             value= {`${(city)}`}
             editable={true}
            placeholder="City" 
           
            
          onChangeText={(value)=>setCity(value)}
               />

            </View>
            <View style={styles.container}>
            <Text style={styles.text}>Pincode</Text>   
            <Field width="100%"
             value= {`${(pin)}`}
             editable={true}
            placeholder="Pin-Code" 
           keyboardType='numeric'
            
          onChangeText={(value)=>setPin(value)}
               />

            </View>
            <View style={styles.container}>
            <Text style={styles.text}>Aadhar</Text>   
            <Field width="100%"
              value= {`${(aadhar)}`}
             editable={true}
            keyboardType="numeric"
         placeholder="Aadhar Number" 
       onChangeText={(value)=>setAadhar(value)}
            />
            
            </View>
             
            </View>
           </View>
           <Btn
            textColor="white"
            bgColor={btnColor}
            btnLabel="Save"
            Press={onPressSave}
            />
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:background
    },
    container1: {
        flexDirection: 'row',                       //alert views
       backgroundColor: background,
       justifyContent:'space-between',
       borderRadius:8,
       
      },
      image:{
        borderRadius:125,
        borderWidth:7,
        borderColor:background,
        alignSelf:'center',
        width:120,
        height:120,
       
    },
    container:{
        
        flexDirection:'row',
        borderWidth:0,
        alignItems:'center',
        borderRadius:8,
        marginBottom:10,
        
      },
      parent:{
        alignItems: 'flex-start',
        marginTop:12,
        
      },
      picker: {
      
        alignSelf:'center',
        width: "70%",
        height:40,
        
   
     
        
      },
      pickerItem:{
        //backgroundColor:'gold',
        width:40, 
        height:40,
        fontSize:12         
      },
      datePickerStyle: {
        width: 200,
        marginTop: 20,
        
      },
      date:{
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5
      },
      text:{
        fontSize:12,
        width:70
      },
});
export default EditProfile;