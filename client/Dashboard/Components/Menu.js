import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Menu = ({createProject, deleteOpen}) => {
  return (
    <View style={style.textStyle}>
        <TouchableOpacity style={style.boutonPlusStyle} onPress={createProject}>
            <FontAwesome name={"plus"} size={18} color={"white"}  />
        </TouchableOpacity>
        <TouchableOpacity style={style.boutonPencilStyle}>
            <FontAwesome name={"pencil"} size={18} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity style={style.boutonTrashStyle} onPress={deleteOpen}>
            <FontAwesome name={"trash"} size={18} color={"white"} />
        </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
    textStyle: {
        flexDirection: "row",
        backgroundColor: "#A1B5FE",
        width:80,
    },
    boutonPencilStyle:{
        paddingTop: 11,
        paddingLeft: 25,
    },
    boutonPlusStyle:{
        paddingTop: 11,
        paddingLeft: 27,
    },
    boutonTrashStyle:{
        paddingTop: 11,
        paddingLeft: 25,
    }
})

export default Menu;