import axios from 'axios';

const apiKey = "202292b24f90ccd79d598f27c783cad0";
const token = "320d633da6a8caffb0104341946e99060869b1e88850e17076c188dd4e8b6e62";
const idBoard = "5abbe4b7ddc1b351ef961414"

export const create_list = async () => {
    try {
      const response = await axios.post(`https://api.trello.com/api/boards/1/lists?name={name}&idBoard=5abbe4b7ddc1b351ef961414&key=202292b24f90ccd79d598f27c783cad0&token=320d633da6a8caffb0104341946e99060869b1e88850e17076c188dd4e8b6e62`, { 
        headers: new Headers({
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Accept'
        }),        
       
      }, 
      );
      console.log(response.data)
      return response.data; 
    } catch (error) {
      console.log('An error occurred while fetching boards', error);
      return [];  
    }
};

export const select_list = async () => {
    try {
      const response = await axios.get(`https://api.trello.com/1/lists/{id}?key=202292b24f90ccd79d598f27c783cad0&token=320d633da6a8caffb0104341946e99060869b1e88850e17076c188dd4e8b6e62`, 
        {  
          headers: new Headers({
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Credentials": "true",
            'Accept': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
          }),           
        });
      return response.json; 
    } catch (error) {
      console.log('An error occurred while fetching boards', error);
      return [];  
    }
};

export const update_list = async () => {
    try {
      const response = await axios.put('http://10.73.188.126/api/boards/1/lists', 
        {               
           name: "List",          
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
      const response = await axios.delete('http://10.73.188.126/lists', 
        {    
          
           name: "List",
          
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