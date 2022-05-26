import React from 'react'
import User from './User';

const UserContainer = ({ users }) => {
    return (
        <div>
            <table id="tabla-amortizacion" class="table">
        
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
                    {users.results.map(
                        (users,index) =>
                    <User key={users.login.uuid}
                    index ={index}
                    name={users.name.first}
                     lastName = {users.name.last}
                     email = {users.email}
                     phone = {users.phone}
                     photo = {users.picture.thumbnail}
                     />)
                    }
             
            </table>
        </div>
    )
}

export default UserContainer;
