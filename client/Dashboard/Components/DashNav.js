import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MenuCreate from './MenuCreate';
import Menu from './Menu';
import { FontAwesome } from '@expo/vector-icons';
import CreateMenu from './CreateMenu';

const DashNav = ({createProject,listProject, deleteProject, isdeleteProject, deleteOpen, isDeleteOpen, selectBoard}) => {
    const [newProjectName, setNewProjectName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleCreateProject = () => {
        createProject(newProjectName);
        setNewProjectName('');
        setIsEditing(false);
        };
  const numList = () => {
    return (
      <View style={style.projectContainer}>
        {listProject.map((project, index) => (
        <TouchableOpacity key={index} onPress={() => selectBoard(project)} style={style.projectStyle}>
            <Text>{project.name}</Text>
            {isDeleteOpen && <TouchableOpacity style={style.boutonTrashStyle} onPress={() => deleteProject(index)}>
              <FontAwesome name={"trash"} size={18} color={"white"} />
            </TouchableOpacity>}
        </TouchableOpacity>
        ))}
      </View>
    );
  };
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>Your Board</Text>
      <View style={style.menuContenair}>
        <Menu 
            deleteProject={deleteProject} 
            deleteOpen={deleteOpen}
            />
        <CreateMenu
          newProjectName={newProjectName}
          setNewProjectName={setNewProjectName}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          handleCreateProject={handleCreateProject}
        />
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
    projectContainer:{
      height: "100%"
    },
    projectStyle:{
      marginTop: 20,
      paddingLeft: 10,
    },
})

export default DashNav;