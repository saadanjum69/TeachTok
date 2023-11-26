import React from 'react'
import { Text, View } from "react-native";

const Profile = () => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           <Text style={{fontWeight:'bold', fontSize:22}}>Profile</Text> 
           <Text style={{fontWeight:'500', fontSize:17}}>No Data</Text>  
    </View>
  )
}

export default Profile