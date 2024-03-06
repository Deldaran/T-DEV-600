import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MenuCreate from './MenuCreate';
import Menu from './Menu';
import { FontAwesome } from '@expo/vector-icons';

import axios from 'axios';

const DashNav = ({createProject,listProject, deleteProject, isdeleteProject, deleteOpen, isDeleteOpen}) => {
  const numList = () => {
    return (
      <View style={style.projectContainer}>
        {listProject.map((project, index) => (
          <View key={index} style={style.projectStyle}>
            <Text selectable>{project.name}</Text>
            {isDeleteOpen && <TouchableOpacity style={style.boutonTrashStyle} onPress={() => deleteProject(index)}>
              <FontAwesome name={"trash"} size={18} color={"white"} />
            </TouchableOpacity>}
          </View>
        ))}
      </View>
    );
  };
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>Your Board </Text>
      <View style={style.menuContenair}>
        <Menu createProject={createProject} deleteProject={deleteProject} deleteOpen={deleteOpen}/>
      </View>
      {listProject? numList(listProject): null}
    </View>
  );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#A1B5FE',
        width: '30%',
        height: '100%',
        
      },
    menuContenair:{
        flexDirection: "row",
    },
    textStyle: {
      backgroundColor: "#7B8BC7",
      height: 35,
      paddingTop: 8,
      paddingLeft: 20,
      color:"#FFFFFF",
    },
    projectStyle:{
      marginTop: 20,
      paddingLeft: 10,
    },
})

export default DashNav;