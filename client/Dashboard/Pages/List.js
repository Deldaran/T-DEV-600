import { FontAwesome } from '@expo/vector-icons';
import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, ScrollView } from 'react-native';
import Card from "./Card";


let titleList = "List"

const List = () => {

    const [listCard, setListCard]= useState([])
    const [listList, setListList]= useState([])

    const createCard = () => {
        setListCard([...listCard, {}]);
      }

    const deleteList = (index) => {
        setListList(listList.filter((list, i) => i !== index));
      }
    const updateList = (index) => {
        for(i in listList){
            if(i == index){
                setListList(listList);
            }
        }
    }

    const selectCard = ()=>{
        return(
            <View>
            { listCard.map((card, index)=>(
                <Card titleCard={"fkdsvhfjfekndgnfhg,fdgbsvbdnfh,g;jcgnbxfljh"} key={index}/>
            ))}
            </View>
        )
    }
  return (
    <View style= {styles.ListPage}>
        <View style= {styles.ListHeader}>
            <Text style = {componentStyle.text}>{titleList}</Text>
            <Pressable onPress={deleteList}>
                <FontAwesome name={"trash"} size={18} color={"white"} />
            </Pressable> 
            <Pressable onPress={updateList}>
                <FontAwesome name={"pencil"} size={18} color={"white"} />
            </Pressable>           
        </View>
        <ScrollView style = {styles.ListCard}>
           {selectCard(listCard)}
        </ScrollView>
        <View style= {styles.ListFooter}>
            <Pressable onPress={createCard}>
            <Text style = {componentStyle.text}>+ Add a card</Text> 
            </Pressable>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    ListPage : {
        backgroundColor: "#414141",
        minWidth: 150,
        width: "70%",
        maxWidth: "70%",
        minHeight: 300,
        borderRadius: 20,
        margin: 20,
    },
    ListHeader: {
        height: "15%",
        backgroundColor: "#363636",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    ListCard: {

        height: "75%",
    },
    ListFooter: {        
        height: "10%",
        backgroundColor: "#363636",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})

const componentStyle = StyleSheet.create({
    text : {
        color: "#A1B5FE",
    }
})

export default List;