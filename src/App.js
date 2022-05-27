import './App.css';
import { useEffect, useState } from 'react';
import Layout from './components/layout/Layout';
import UserContainer from './components/UserContainer';
import Loading from './components/Loading';
//import ReactPaginate from 'react-paginate';



function App() {
  const [users, setUsers] = useState(null);



  const fetchUsers = async () =>{
    
    console.log('fetch Users');
    const Users_url = 'https://randomuser.me/api/?results=34';
    const UsersData = await fetch(Users_url);
    const UsersJSON = await UsersData.json(); //cuando se actualiza un estado RAECT vuelve a renderizar un componente
    setUsers (UsersJSON);
    console.log(UsersJSON);
    
  }

  useEffect(() => {
    console.log("Inicializando Users 😎");
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log("Actualización users");
  }, [users]);

  return (
    <div className="App">
      {console.log("Renderizando")}
      {users ? 
      <Layout>
        <UserContainer users={users} 
        />  
      </Layout> : <Loading/> }
      

      </div>

  );
}

export default App;
