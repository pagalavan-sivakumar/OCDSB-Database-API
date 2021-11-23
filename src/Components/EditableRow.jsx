import React from 'react'

const EditableRow= ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return( 
    <tr>
      <td>
        <input
          type= "text" 
          required= "required" 
          placeholder= "Enter the student ID... " 
          name= "StudentID" 
          value={editFormData.StudentID}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <input
          type= "text" 
          required= "required" 
          placeholder= "Enter the student name " 
          name= "StudentName" 
          onChange={handleEditFormChange}
          value={editFormData.StudentName}
         ></input>
      </td>
      
      <td>
        <input
          type= "text" 
          required= "required" 
          placeholder= "Enter the student birthday... " 
          name= "StudentBirthday" 
          onChange={handleEditFormChange}
          value={editFormData.StudentBirthday}
         ></input>
         </td>
      
      <td>
        <input
          type= "text" 
          required= "required" 
          placeholder= "Enter the student year...  " 
          name= "StudentYear" 
          onChange={handleEditFormChange}
          value={editFormData.StudentYear}
         ></input>
      </td>

      <td> 
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick}>Cancel</button> 
      </td>
    
    </tr>
  );
}

export default EditableRow