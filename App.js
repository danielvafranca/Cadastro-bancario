import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {View,Text, StyleSheet,Switch, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'

export default function App() {
  const[name,setName] = useState('') // Name login
  const[idade,setIdade] = useState('') // Year Login
  const[slider,setSlider]=useState(1000) // Credit limit
  const[student,setStudent]= useState('false') //Student ?
  const[selectGender,setSelectGender] = useState(0) //Gender
  const[gender,setGender] = useState([
    {key:1, sexo:'Male'},
    {key:2, sexo:'Feminine'}
  ])// Objetos
  function verificar(){
    if(name < 0 ){
      alert('The name must contain only Letters. Please check')
    }else if (idade<18){ alert('You must be 18 years')}
  }

  let genderItem = gender.map( (v, k) =>{
    return <Picker.Item key={k} value={k} label={v.sexo}/>
  
   
    
  })
 return(
   <ScrollView>
    <View style = {styles.container}>
      <View style = {styles.view1}>
        <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',color:'#808080'}}>Blue Bank</Text>
        
        <Text style={styles.reference}> Name:</Text>
        <TextInput
        style = {styles.txt}
        placeholder = 'Ex: Marcos de Almeida'
        onChangeText = {(itemValue)=> setName(itemValue)}
        
        />

        <Text style={styles.reference}>  Yaers:</Text>
        <TextInput
        style = {styles.txt}
        placeholder = 'Ex: 25'
        onChangeText = {(itemValue)=> setIdade(itemValue)}
        keyboardType = 'numeric'
        />
        
        <Text style={styles.reference}> Gender:</Text>
        
        <Picker 
        style = {{marginTop:6, color:'#808080'}}
        selectedValue={selectGender}
        onValueChange={(itemValue,itemIndex) => setSelectGender(itemValue)}>
        {genderItem}
        </Picker>

        <Text style={styles.reference}> Limit:</Text>

        <Slider
        style={{marginTop:25}}
        minimumValue={0}
        maximumValue={2000}
        onValueChange={(itemValue) => setSlider(itemValue)}
        value={slider}
        />
        
        <Text style={styles.lmt}>{slider.toFixed(0)}</Text> 
        
        
        <View style={styles.student}>
        <Text style={styles.reference}>  Are you a student?</Text>
        <Switch
        value = {student}
        onValueChange={ (itemValue)=> setStudent(itemValue)}
        style={{marginTop:23,margin:5}}
        />
        <Text style={{marginTop:19,margin:5,color:'#808080',fontSize:20}}>{student ? 'Yes' : 'Not'}</Text>
        </View>

        
        <TouchableOpacity style={{marginTop:18,alignItems:'center',justifyContent:'center'}} onPress={verificar}>

          <View style={{
            felx:1,backgroundColor:'#808080',
            height:80,
            width:100,
            borderRadius:60,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:`#7b68ee`,
            
            }}>
            <Text style={{fontWeight:'bold',fontSize:25, color:'#191970'}}>Register</Text>
          </View>
        </TouchableOpacity>

      </View> 
    
      <View style = {[styles.view2,{alignItems:'center',justifyContent:'center',}]}>

        <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',color:'#808080',marginBottom:25}}>Personal data</Text>
          <View style = {styles.view3}>
            <Text style={styles.txtRes}>Name: {name}</Text>
            <Text style={styles.txtRes}>Yaers: {idade}</Text>
            <Text style={styles.txtRes}>Limit: {slider.toFixed(0)}</Text>
            <Text style={styles.txtRes}>Gender: {gender[selectGender].sexo}</Text>

            <TouchableOpacity style={{marginTop:18,alignItems:'center',justifyContent:'center'}} onPress={()=>alert('Tudo ok')}>

          <View style={{
            felx:1,backgroundColor:'#808080',
            height:80,
            width:100,
            borderRadius:60,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:`#7b68ee`,
            
            }}>
            <Text style={{fontWeight:'bold',fontSize:25, color:'#191970'}}>Confirm</Text>
          </View>
        </TouchableOpacity>

          </View>
      </View>
      
    </View>
   </ScrollView>
 )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#4b0082',  
  },
  view1:{
    backgroundColor:'#191970',
    height:550,
    width:350,
    marginTop:20,
    marginBottom:20,
    borderRadius:28

  },
  view2:{
    backgroundColor:'#191970',
    height:560,
    width:350,
    marginTop:25,
    
    borderRadius:28
  },
  reference:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:13,
    color:'#808080',
    
  },
  txt:{
    height:35,
    width:340,
    padding:10,
    backgroundColor:'#808080',
    borderRadius:12,
    borderColor:'#4b0082',
    margin:5
  },
  lmt:{
    textAlign:'center',
    marginTop:1,
    fontSize:30
  },
  student:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:10,
    fontSize:30,
    
  },
  view3:{
    borderRadius:20,
    height:400,
    width:330,
    backgroundColor:'#808080',
    
  },
  txtRes:{
    margin:8,
    fontSize:20,
    fontWeight:'bold',

  }
})