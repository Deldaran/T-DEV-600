import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, ScrollView } from 'react-native';
import Card from "./Card";
import { fetchCard, postCard, deleteCard } from "../../Utils/utils";


const List = ({ list, titleList, updateList, deleteList, createCard, boardSelected }) => {

    const [listCard, setListCard] = useState([])
    const addCard = () => {
        postCard(list.id, "newCard", setListCard);
    }
    const delCard = (cardId) => {
        deleteCard(cardId, setListCard);
    }
    useEffect(() => {
        if (Object.keys(boardSelected).length !== 0) {
            fetchCard(list.id, setListCard);
        }
    }, [boardSelected]);
    const selectCard = () => {
        return (
            <View style={styles.ListCard}>
                {listCard.map((card, index) => (
                    <Card card ={card} delCard={delCard} addCard={addCard} titleCard={card.name} key={index} />
                ))}
            </View>
        )
    }
    return (
        <ScrollView style={styles.ListPage}>
            <View style={styles.ListHeader}>
                <Text style={componentStyle.text}>{titleList}</Text>
                <Pressable onPress={()=>deleteList(list.id)}>
                    <FontAwesome name={"trash"} size={18} color={"#0086D4"} />
                </Pressable>
                <Pressable onPress={updateList}>
                    <FontAwesome name={"pencil"} size={18} color={"#0086D4"} />
                </Pressable>
            </View>
            <ScrollView style={styles.ListCardAll}>
                {selectCard()}
            </ScrollView>
            <View style={styles.ListFooter}>
                <Pressable onPress={addCard}>
                    <Text style={componentStyle.text}>+ Add a card</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    ListPage: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 20,
        marginBottom: 10,
        padding: 10,
        width: 210
    },
    ListHeader: {
        backgroundColor: "#F7EEDD",
        borderRadius: 50,
        padding: 7,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        marginBottom: 4
    },
    ListFooter: {
        backgroundColor: "#F7EEDD",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: '100%'
    },
})

const componentStyle = StyleSheet.create({
    text: {
        color: "#1E1E1E",
    }
})

export default List;