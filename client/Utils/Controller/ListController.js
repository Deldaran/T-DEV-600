import axios from 'axios';

const apiKey = "202292b24f90ccd79d598f27c783cad0";
const token = "320d633da6a8caffb0104341946e99060869b1e88850e17076c188dd4e8b6e62";
const idBoard = "5abbe4b7ddc1b351ef961414"

export const create_list = async () => {
    try {
      const response = await axios.post('https://api.trello.com/1/lists?name={gege}', {
        headers: {
          'Accept': 'application/javascript', // Specify the expected MIME type
        },
        params: {
          idBoard: idBoard,
          apiKey: apiKey,
          token: token,          
        }
      }, 
      );
      console.log(response.text)
      return response.text; 
    } catch (error) {
      console.log('An error occurred while fetching boards', error);
      return [];  
    }
};

export const select_list = async () => {
    try {
      const response = await axios.get('https://api.trello.com/1/lists/{1}', 
        {
          headers: {
            'Accept': 'application/javascript', // Specify the expected MIME type
          },
           params:{
            apiKey: apiKey,
            token: token
           } 
        });
      console.log(response.text)
      return response.data; 
    } catch (error) {
      console.log('An error occurred while fetching boards', error);
      return [];  
    }
};

export const update_list = async () => {
    try {
      const response = await axios.put('http://10.73.188.126/1/lists', 
        {     
           name: "List",
           headers: {
            'Accept': 'application/javascript', // Specify the expected MIME type
           },
           params:{
            apiKey: apiKey,
            token: token
           } 
        });
      console.log(response.text)
      return response.data; 
    } catch (error) {
      console.log('An error occurred while fetching boards', error);
      return [];  
    }
};

export const delete_list = async () => {
    try {
      const response = await axios.delete('http://10.73.188.126/1/lists', 
        {     
           name: "List",
           headers: {
            'Accept': 'application/javascript', // Specify the expected MIME type
           },
           params:{
            apiKey: apiKey,
            token: token
           } 
        });
      console.log(response.text)
      return response.data; 
    } catch (error) {
      console.log('An error occurred while fetching boards', error);
      return [];  
    }
};