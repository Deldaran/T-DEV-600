import { FontAwesome } from '@expo/vector-icons';
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, ScrollView } from 'react-native';
import Card from "./Card";
import { fetchCard } from "../../Utils/utils";

const List = ({list, titleList, updateList, deleteList, createCard, boardSelected}) => {

    const [listCard, setListCard]= useState([])
    
    useEffect(() => {
        if(Object.keys(boardSelected).length !== 0){
            fetchCard(list.id, setListCard);
        }
    }, [boardSelected]);
    const selectCard = ()=>{
        return(
            <View>
            { listCard.map((card, index)=>(
                <Card titleCard={card.name} key={index}/>
            ))}
            </View>
        )
    }
  return (
    <ScrollView style= {styles.ListPage}>
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
           {selectCard()}
        </ScrollView>
        <View style= {styles.ListFooter}>
            <Pressable onPress={createCard}>
            <Text style = {componentStyle.text}>+ Add a card</Text> 
            </Pressable>
        </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
    ListPage : {
        backgroundColor: "#414141",
        minWidth: 150,
        width: "70%",
        maxWidth: "70%",
        borderRadius: 20,
        margin: 20,
        height: "auto",
    },
    ListHeader: {
        backgroundColor: "#363636",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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