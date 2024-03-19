import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Pressable, Text } from 'react-native';
import DashNav from "../Components/DashNav";
import List from "./List";
import { fetchLists, createList } from "../../Utils/utils";

const Body = ({putProject, isNavOpen, createProject, listProject, deleteProject, deleteOpen, isDeleteOpen, selectBoard, boardSelected}) => {
  const [listCard,setListCard]=useState([])
  const [listList, setListList]= useState([])

  const createCard = () => {
    setListCard([...listCard, {}]);
  }

  const deleteList = () => {
      setListList(listList.filter((list) => boardSelected.id !== list.id));
    }
  const updateList = (index) => {
      for(i in listList){
          if(i == index){
              setListList(listList);
          }
      }
  }
  useEffect(() => {
    if(Object.keys(boardSelected).length !== 0){
      fetchLists(boardSelected.id, setListList);
    }
  }, [boardSelected]);
  
  const postList = () => {
    createList(boardSelected.id,"newList", setListList);
    }
  const selectList = ()=>{
    return(
        <View style= {style.selectList}>
        { listList.map((list)=>(
            <List list={list} boardSelected={boardSelected} updateList={updateList} deleteList={deleteList} createCard={createCard} titleList={list.name} key={list.id}/>
        ))}
        </View>
    )
  }
  return (
    <View style= {style.bodyPage}>
      <View style= {style.createListButton}>
          <Pressable onPress={postList}>
            <Text style= {style.createButtonText}>+</Text>
          </Pressable>
      </View>
      <ScrollView >        
        <View style={style.container}>
          {isNavOpen && 
          <DashNav
            putProject={putProject}
            selectBoard={selectBoard} 
            createProject={createProject} 
            listProject={listProject} 
            deleteProject={deleteProject} 
            deleteOpen={deleteOpen} 
            isDeleteOpen={isDeleteOpen}/>}
            <ScrollView style={style.listContainer} >
              {selectList(listList)}
            </ScrollView>          
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  bodyPage: {
    width: "100%",
    height: "100%",
    backgroundColor: "white"
  },
  container: {
    minHeight: "100%",
    flexDirection: 'row',
  },
  listContainer: {
    flexDirection: 'row',
    marginBottom: 10,
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
    flex: 1,
  },
  createButtonText: {
    fontSize: 25,
  }
});

export default Body;