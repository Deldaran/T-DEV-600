
const fetchBoards = async (setListProject) => {
  try{ 
    const response = await fetch('http://10.73.189.69:80/api/boards');
    const data = await response.json();
    setListProject(data);
  }catch(error){
    console.log('An error occurred while fetching boards', error);
    return [];
  }
}

const fetchLists = async (boardId, setListList) => {
  try{
    const response = await fetch(`http://10.73.189.69:80/api/boards/${boardId}/lists`);
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
      const response = await fetch(`http://10.73.189.69:80/api/lists/${listId}/cards`);
      const data = await response.json();
      setListCard(data);
      console.log('Cards:', data)
  }catch(error){
      console.log('An error occurred while fetching cards', error);
      return [];
  }
}

const postProject = (projectName, setListProject) => {
  console.log('projectName:', projectName)
  try {
    fetch('http://10.73.189.69:80/api/boards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: projectName })
    })
    .then(response => response.json())
    .then(data => {
      setListProject(prevList => [...prevList, data]);
    });
  } catch (error) {
    console.error('Error creating project:', error);
  }
};

const postDeleteProject = (id, setListProject) => {
  try {
    fetch(`http://10.73.189.69:80/api/boards/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      setListProject(prevList => prevList.filter((project) => id !== project.id));
    });
  } catch (error) {
    console.error('Error deleting project:', error);
  }
};
export { fetchBoards, fetchLists, fetchCard, postProject, postDeleteProject};