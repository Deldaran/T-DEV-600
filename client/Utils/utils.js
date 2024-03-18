
const fetchBoards = async (setListProject) => {
  try{ 
    const response = await fetch('http://localhost:80/api/boards');
    const data = await response.json();
    setListProject(data);
  }catch(error){
    console.log('An error occurred while fetching boards', error);
    return [];
  }
}

const fetchLists = async (boardId, setListList) => {
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

const fetchCard = async (listId, setListCard) => {
  try{
      const response = await fetch(`http://localhost:80/api/lists/${listId}/cards`);
      const data = await response.json();
      setListCard(data);
      console.log('Cards:', data)
  }catch(error){
      console.log('An error occurred while fetching cards', error);
      return [];
  }
}
export { fetchBoards, fetchLists, fetchCard };