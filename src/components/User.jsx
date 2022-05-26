import React from 'react'

export default function User({index,name,lastName, email,phone,photo}) {
  return (
    <tr>
      <td>{index+1}</td>
      <td>{name}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td><img src= {photo}/></td>
    </tr>
    
    
  )
}
