import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Dashboard/Pages/Header';
import Body from './Dashboard/Pages/Body';
import Footer from './Dashboard/Pages/Footer';
import { useEffect, useState } from 'react';
import { postProject, fetchBoards, delDeleteProject } from './Utils/utils';


export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [listProject, setListProject] = useState([]);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [listList, setListList] = useState([])
  const [boardSelected, setBoardSelected] = useState({});


  const selectboard = (board) => {
    setBoardSelected(board);
  }
  const OpenNav = () => {
    setIsNavOpen(!isNavOpen);
  }
  const createProject = (projectName)=>{
    postProject(projectName, setListProject);
  }
  
  const deleteProject = (id) => {
    delDeleteProject(id, setListProject);
  }
  const putProject = (id) => {
    putProject(id, setListProject);
  }
  const deleteOpen = () => {
    setDeleteOpen(!isDeleteOpen);
  }
  const deleteCard = (index) => {
    setListCard(listList.filter((project, i) => i !== index));
  }
   useEffect(() => {
    fetchBoards(setListProject);
  }, []);
  return (
    <View style={headerStyle.container}>
      <Header OpenNav={OpenNav}  boardSelected={boardSelected}  />
      <Body 
        boardSelected={boardSelected} 
        selectBoard={selectboard} 
        isNavOpen={isNavOpen} 
        createProject={createProject} 
        listProject={listProject} 
        deleteProject={deleteProject} 
        deleteOpen={deleteOpen} 
        putProject={putProject}
        isDeleteOpen={isDeleteOpen} />
      {/* <Footer/> */}
    </View>
  );
}
// test

const headerStyle = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: '#D9D6D8',
    alignItems: 'center',
    justifyContent: 'collapse',
  },
});