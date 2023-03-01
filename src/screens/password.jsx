import React,{useState} from 'react'
import { View ,TextInput,StyleSheet} from 'react-native'
import {Ionicons} from "@expo/vector-icons"
     
function Password() {

  const [showPassword,setshowPassword]=useState(true);
  const onEye=()=>{
    if(showPassword === true)
    {
      setshowPassword(false)
    }
    else{
      setshowPassword(true)
    }
  }
  return (
    <View style={style.container}>
        <TextInput placeholder='Enetr Password' style={style.inputPass} 
       secureTextEntry={showPassword}
      onChangeText={(text)=>setshowPassword(text)}/>
      <Ionicons size={24} color='black' name={showPassword ? "eye" : "eye-off"} 
      style={style.btn} onPress={onEye}/>
    </View>
  )
}

export default Password

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'rgba(255,110,110,.5)',

  },
  inputPass:{
    alignSelf:'center',
    width:"80%",
    height:40,
    marginVertical:50,
    marginHorizontal:10,
    borderWidth:1,
    borderColor:'black',
    borderRadius:10,
    paddingHorizontal:5,

  },
  btn:{
    alignSelf:'center'
  }

})
