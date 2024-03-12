import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Pressable, Text } from 'react-native';
import DashNav from '../Component/DashNav';
import List from "./List"

const Body = ({isNavOpen, createProject, listProject, deleteProject, deleteOpen, isDeleteOpen}) => {
  
  const [listCard,setListCard]=useState([{},{}])

  const [listList, setListList]= useState([])

  const createList = () => {
      setListList([...listList, {}]);
    }
  const selectList = ()=>{
    return(
        <View style= {style.selectList}>
        { listList.map((card, index)=>(
            <List titleList={"Liste"+ index} key={index}/>
        ))}
        </View>
    )
  }
  
  return (
    <View style= {style.BodyPage}>
      <View style= {style.createListButton}>
          <Pressable onPress={createList}>
            <Text style= {style.createButtonText}>+</Text>
          </Pressable>
      </View>
      <ScrollView >        
        <View style={style.container}>
          {isNavOpen && <DashNav createProject={createProject} listProject={listProject} deleteProject={deleteProject} deleteOpen={deleteOpen} isDeleteOpen={isDeleteOpen}/>}
            <ScrollView style={style.listContainer} >
              {selectList(listList)}
            </ScrollView>          
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  BodyPage: {
    width: "100%",
    height: "100%",
    backgroundColor: "white"
  },
  container: {
    minHeight: "100%",
    flexDirection: 'row',
  },
  listContainer: {
    display: "flex",
    flexDirection: 'row',
    marginBottom: 10,
    flexWrap: "wrap"
  },
  createListButton: {
    position: "absolute",
    bottom: 130,
    right: 20,
    zIndex: 2,
    marginRight: 20,
    marginTop: 10,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#A1B5FE",    
    borderRadius: 15,
   
  },
  selectList: {
    margin: 20,
    display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(4, 1fr)",
  },
  createButtonText: {
    fontSize: 25,
  }
});

export default Body;