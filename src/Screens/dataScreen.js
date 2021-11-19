import React, {useEffect, useState} from 'react'
import { Button, StyleSheet, Text, View, TextInput, FlatList} from 'react-native'
import {useSelector,  useDispatch} from 'react-redux'
import { fetchData, getData, deleteData, updateData } from '../Redux/action'
import uuid from 'react-native-uuid';
export const Screen1 = () => {
        const [title, setTitle]= useState('')
        const [category, setCategory] = useState('')
        const [description, setDescription]= useState('')
       
    const dispatch= useDispatch()
    const list= useSelector(state=>state.dataReducer)
    useEffect(()=>{
        dispatch(fetchData())
        console.log('datascreen',list)
           },[])
    const data= {
        id: uuid.v4(),
        title: title,
        category: category,
        description: description
    }

    const addData=()=>{
        dispatch(getData(data))
        setTitle('')
        setCategory('')
        
        setDescription('')
      
    }

    return (
        <View style={{flex:1, backgroundColor:'tomato'}}>
            <Text style={{fontSize:25, fontWeight:'bold', alignSelf:'center', color:'black'}}>
                DATA
            </Text>
            <TextInput placeholder="ENTER TITLE" placeholderTextColor="white" 
            value={title}
            style={{borderWidth:3, borderColor:'#fff', margin:10, paddingLeft:10, borderRadius:10}} 
            onChangeText={(title)=> setTitle(title)}
            />
            <TextInput placeholder="ENTER CATEGORY" placeholderTextColor="white" 
            value={category}
            style={{borderWidth:3, borderColor:'#fff', margin:10, paddingLeft:10, borderRadius:10}}
            onChangeText={(cat)=> setCategory(cat)} />
            <TextInput placeholder="ENTER DESCRIPTION" placeholderTextColor="white"
            value={description} 
            style={{borderWidth:3, borderColor:'#fff', margin:10, paddingLeft:10, borderRadius:10}} 
            onChangeText={(des)=> setDescription(des)}/>
            <Button title="ADD DATA" onPress={()=>addData()} />
            <FlatList
                data={list.data}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                       <Text style={styles.subtitle}>Title : {item.title}</Text>
                        <Text style={styles.subtitle}> Category : {item.category}</Text>
                        <Text style={styles.subtitle}> Description : {item.description}</Text>
                        <View style={{flexDirection:'row'}}>
                        <Button title="Update" onPress={()=>dispatch(updateData(item.id))} color="orange"/>
                        <Button title="Delete" onPress={()=>dispatch(deleteData(item.id))} color="red"/>
                        </View>
                       
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
                        </View>
    )
}



const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        margin: 7,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        margin: 10,
    },
    subtitle: {
        fontSize: 20,
        margin: 3,
        color: 'black',
        
    }
})
