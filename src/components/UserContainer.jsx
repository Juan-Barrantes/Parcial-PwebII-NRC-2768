import { useState } from 'react';
import React from 'react'
import User from './User';



const UserContainer = ({ users }) => {
    const [pageNumber, setPageNumber] = useState(0)
    const userPerPage = 10;
    const pagesScreen = pageNumber * userPerPage;    
    const allUsersIndex = users.results.map((user,index) =>{
        return {
            ...user,
            //agregamos id
            id: index
        }
        
    })
    const displayUsers =allUsersIndex.slice(pagesScreen, pagesScreen + userPerPage)
    console.log(allUsersIndex);
    return (
        <div>
            <table id="tabla-amortizacion" className="table">
                <thead>
                    <tr style={{backgroundColor:'#7CFBD7'}}
                        id="saldoInicial" >
                    </tr>
                    <tr>
                        <th>N°</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>e-mail</th>
                        <th>N° Celular</th>
                        <th>foto</th>
                    </tr>
                </thead>
                <tbody>
                    {displayUsers.map(
                        (users,index) =>
                    <User key={users.login.uuid}
                    index ={users.id}
                    name={users.name.first}
                     lastName = {users.name.last}
                     email = {users.email}
                     phone = {users.phone}
                     photo = {users.picture.thumbnail}
                     />)
                    }
                </tbody>
                
                    
                
            </table>
                <button className="btn btn-outline-dark"  onClick={()=>{
                     setPageNumber(pageNumber-1)
                     
                }}
                >
                    prev
                </button>
                <button className="btn btn-outline-dark" onClick={()=>{
                    setPageNumber(pageNumber+1)    
                }}>next</button>
        </div>
    )
}

export default UserContainer;
