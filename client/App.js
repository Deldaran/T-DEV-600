import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Dashboard/Pages/Header';
import Body from './Dashboard/Pages/Body';
import Footer from './Dashboard/Pages/Footer';
import { useEffect, useState } from 'react';
import { fetchBoards } from './Utils/utils';


export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [listProject, setListProject] = useState([]);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  
  useEffect(() => {
    fetchBoards().then(data => {
      setListProject(data);
    });
  }, []);
  const OpenNav = () => {
    setIsNavOpen(!isNavOpen);
  }
  const createProject = () => {
    setListProject(prevList => [...prevList, { name: "New Project" }]);
  };
  
  const deleteProject = (index) => {
    setListProject(listProject.filter((project, i) => i !== index));
  }
  const deleteOpen = () => {
    setDeleteOpen(!isDeleteOpen);
  }
  
  return (
    <View style={headerStyle.container}>
      <Header OpenNav ={OpenNav}/>
      <Body isNavOpen={isNavOpen} createProject={createProject} listProject={listProject} deleteProject={deleteProject} deleteOpen={deleteOpen} isDeleteOpen={isDeleteOpen} />
      {/* <Footer/> */}
    </View>
  );
}


const headerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D6D8',
    alignItems: 'center',
    justifyContent: 'collapse',
  },
 
});