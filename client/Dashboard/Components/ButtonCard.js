import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

const ButtonCard = () => {
    return (
        <View style={style.container}>
            <Pressable style={style.button}>
                <FontAwesome name={"pencil"} size={18} color={"white"} />
            </Pressable>
            <Pressable style={style.button}>
                <FontAwesome name={"trash"} size={18} color={"white"} />
            </Pressable>
            <Pressable style={style.button}>
                <FontAwesome name={"user"} size={18} color={"white"} />
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    button: {
        padding: 3,
        borderRadius: 10,
        backgroundColor: "#0086D4"
    }
})

export default ButtonCard