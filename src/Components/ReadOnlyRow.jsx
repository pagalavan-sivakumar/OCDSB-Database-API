import React from 'react'

const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick}) => {
  return (
  <tr>
          <td>{contact.StudentID}</td>
          <td>{contact.StudentName}</td>
          <td> {contact.StudentBirthday}</td>
          <td>{contact.StudentYear}</td>
          <td>
          <button 
          type="button" 
          onClick={(event)=> handleEditClick(event,contact)}
          >
            Edit
          </button>
          <button type= "button" onClick={()=>handleDeleteClick(contact.id)}>delete</button>
          </td>
  </tr>
  );
};

export default ReadOnlyRow;