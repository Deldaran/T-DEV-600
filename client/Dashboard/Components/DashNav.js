import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MenuCreate from './MenuCreate';
import Menu from './Menu';
import { FontAwesome } from '@expo/vector-icons';
import CreateMenu from './CreateMenu';

const DashNav = ({putProject, createProject,listProject, deleteProject, isdeleteProject, deleteOpen, isDeleteOpen, selectBoard}) => {
    const [newProjectName, setNewProjectName] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [isModify, setIsModify] = useState(false);

  const handleCreateProject = () => {
    if(newProjectName === '') {
      setNewProjectName('');
      setIsEditing(false);
      return;
    };
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

            {isDeleteOpen 
              && 
              <TouchableOpacity style={style.boutonTrashStyle} onPress={() => deleteProject(project.id)}>
                <FontAwesome name={"trash"} size={18} color={"white"} />
              </TouchableOpacity>
            }
        </TouchableOpacity>
        ))}
      </View>
    );
  };
  const setmodify= ()=>{
    setIsModify(!isModify)
  }
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>Your Board</Text>
      <View style={style.menuContenair}>

        <CreateMenu

          newProjectName={newProjectName}
          setNewProjectName={setNewProjectName}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          handleCreateProject={handleCreateProject}
        />
        <Menu 

            setIsModify={setmodify}
            deleteProject={deleteProject} 
            deleteOpen={deleteOpen}
        />
       
      </View>
      {listProject ? numList(listProject) : null}
    </View>
  );
};
const style = StyleSheet.create({

  container: {
    backgroundColor: '#0086D4',
    width: '30%',
    height: '100%',
  },
  menuContenair: {
    flexDirection: "column",
  },
  textStyle: {
    backgroundColor: "#7B8BC7",
    height: 35,
    paddingTop: 8,
    paddingLeft: 20,
    color: "#FFFFFF",
  },
  projectContainer: {
    height: "100%"
  },
  projectStyle: {
    marginTop: 20,
    paddingLeft: 10,
  },
  
})

export default DashNav;