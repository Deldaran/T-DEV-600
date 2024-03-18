import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Pressable, Text } from 'react-native';
import DashNav from "../Components/DashNav"
import List from "./List"

const Body = ({isNavOpen, createProject, listProject, deleteProject, deleteOpen, isDeleteOpen, selectBoard, boardSelected}) => {
  const [listCard,setListCard]=useState([])
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
  const fetchLists = async (boardId) => {
    try{
      const response = await fetch(`http://localhost:80/api/boards/${boardId}/lists`);
      const data = await response.json();
      setListList(data);
      console.log('Lists:', data)
    }catch(error){
      console.log('An error occurred while fetching lists', error);
      return [];
    }
  }
  useEffect(() => {
    if(Object.keys(boardSelected).length !== 0){
      fetchLists(boardSelected.id);
    }
  }, [boardSelected]);
  
  const createList = () => {
      setListList([...listList, {}]);
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
    <View style= {style.BodyPage}>
      <View style= {style.createListButton}>
          <Pressable onPress={createList}>
            <Text style= {style.createButtonText}>+</Text>
          </Pressable>
      </View>
      <ScrollView >        
        <View style={style.container}>
          {isNavOpen && <DashNav selectBoard={selectBoard} createProject={createProject} listProject={listProject} deleteProject={deleteProject} deleteOpen={deleteOpen} isDeleteOpen={isDeleteOpen}/>}
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