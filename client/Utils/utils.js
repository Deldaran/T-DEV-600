import axios from 'axios';

const baseURL = 'http://10.73.189.69:80/api';

const fetchBoards = async (setListProject) => {
  try{ 
    const response = await axios.get(`${baseURL}/boards`);
    setListProject(response.data);
  } catch(error) {
    console.log('An error occurred while fetching boards', error);
    return [];
  }
}

const fetchLists = async (boardId, setListList) => {
  try{
    const response = await axios.get(`${baseURL}/boards/${boardId}/lists`);
    setListList(response.data);
  } catch(error) {
    console.log('An error occurred while fetching lists', error);
    return [];
  }
}

const fetchCard = async (listId, setListCard) => {
  try{
    const response = await axios.get(`${baseURL}/lists/${listId}/cards`);
    setListCard(response.data);
  } catch(error) {
    console.log('An error occurred while fetching cards', error);
    return [];
  }
}

const postProject = async (projectName, setListProject) => {
  try {
    const response = await axios.post(`${baseURL}/boards`, { name: projectName });
    setListProject(prevList => [...prevList, response.data]);
  } catch (error) {
    console.error('Error creating project:', error);
  }
};

const delDeleteProject = async (id, setListProject) => {
  try {
    await axios.delete(`${baseURL}/boards/${id}`);
    setListProject(prevList => prevList.filter((project) => id !== project.id));
  } catch (error) {
    console.error('Error deleting project:', error);
  }
};

const putModifyProject = async (id, setListProject) => {
  try {
    await axios.put(`${baseURL}/boards/${id}`);
    setListProject(prevList => prevList.filter((project) => id !== project.id));
  } catch (error) {
    console.error('Error modifying project:', error);
  }
};

const createList = async (boardId, listName, setListList) => {
  try {
    const response = await axios.post(`${baseURL}/boards/${boardId}/lists`, { name: listName });
    setListList(prevList => [...prevList, response.data]);
  } catch (error) {
    console.error('Error creating list:', error);
  }
}

export { fetchBoards, fetchLists, fetchCard, postProject, delDeleteProject, putModifyProject, createList};