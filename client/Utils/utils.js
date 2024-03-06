import axios from 'axios';

const fetchBoards = async () => {
    try {
      const response = await axios.get('http://10.73.188.126/api/boards');
      return response.data;  // Return the data directly
    } catch (error) {
      console.log('An error occurred while fetching boards', error);
      return [];  // Return an empty array or handle the error accordingly
    }
};

//getList function
const fetchLists = async (boardId) => {
    try {
      const response = await axios.get(`http://10.73.188.126/api/boards/${boardId}/lists`);
        return response.data;  // Return the data directly
    }
    catch (error) {
      console.log('An error occurred while fetching lists', error);
      return [];  // Return an empty array or handle the error accordingly
    }
}
//getCard function
const fetchCards = async (listId) => {
    try {
      const response = await axios.get(`http://10.73.188.126/api//lists/${listId}/cards`);
        return response.data;  // Return the data directly
    }
    catch (error) {
      console.log('An error occurred while fetching Cards', error);
      return [];  // Return an empty array or handle the error accordingly
    }
}

export { fetchBoards, fetchLists };