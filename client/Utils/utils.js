import axios from 'axios';

//getBoard function
const fetchBoards = async () => {
    try {
      const response = await axios.get('http://10.73.188.126/api/boards');
      return response.data;
    } catch (error) {
      console.log('An error occurred while fetching boards', error);
      return [];
    }
};

//getList function
const fetchLists = async (boardId) => {
    try {
      const response = await axios.get(`http://10.73.188.126/api/boards/${boardId}/lists`);
        return response.data;
    }
    catch (error) {
      console.log('An error occurred while fetching lists', error);
      return [];
    }
}
//getCard function
const fetchCards = async (listId) => {
    try {
      const response = await axios.get(`http://10.73.188.126/api//lists/${listId}/cards`);
        return response.data;
    }
    catch (error) {
      console.log('An error occurred while fetching Cards', error);
      return [];
    }
}

export { fetchBoards, fetchLists };