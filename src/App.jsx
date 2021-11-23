 import React, {useState,Fragment } from 'react';
import './App.css';
import data from "./mock-data.json";
import{nanoid} from 'nanoid';
import ReadOnlyRow from "./Components/ReadOnlyRow";
import EditableRow from "./Components/EditableRow";

const App=() => {
  const [contacts,setContacts]= useState(data);
  const [addFormData, setAddFormData]= useState({
    StudentID: '',
    StudentName: '',
    StudentBirthday:'',
    StudentYear:'',
  });
const [editFormData,setEditFormData]= useState({
   StudentID: '',
    StudentName: '',
    StudentBirthday:'',
    StudentYear:'',
})





const [editContactId, setEditContactId]= useState(null);

const handleAddFormChange= (event)=> {
  event.preventDefault();

  const fieldName= event.target.getAttribute('name');
  const fieldValue= event.target.value;

  const newFormData= {... addFormData};
  newFormData[fieldName]= fieldValue;

  setAddFormData(newFormData); 
};

const handleEditFormChange= (event)=>{
  event.preventDefault();

  const fieldName= event.target.getAttribute('name');
  const fieldValue= event.target.value;

  const newFormData= {...editFormData};
  newFormData[fieldName]= fieldValue;

  setEditFormData(newFormData);
};

const handleAddFormSubmit=(event)=>{
  event.preventDefault();

  const newContact={
    id: nanoid(),
    StudentID: addFormData.StudentID,
    StudentName:addFormData.StudentName,
    StudentBirthday:addFormData.StudentBirthday,
    StudentYear:addFormData.StudentYear,
  };
  const newContacts= [...contacts, newContact];
  setContacts(newContacts);
};

const handleEditFormSubmit= (event)=> {
  event.preventDefault();

  const editedContact={
    id: editContactId,
   StudentID: editFormData.StudentID,
    StudentName:editFormData.StudentName,
    StudentBirthday:editFormData.StudentBirthday,
    StudentYear:editFormData.StudentYear,
  
  }
   
  const newContacts=[...contacts];

  const index= contacts.findIndex((contact)=> contact.id===editContactId);

  newContacts[index] = editedContact;

  setContacts(newContacts);
  setEditContactId(null);


}
const handleEditClick = (event, contact)=>{
  event.preventDefault();
  setEditContactId(contact.id);

  const formValues={
     StudentID: contact.StudentID,
    StudentName: contact.StudentName,
    StudentBirthday: contact.StudentBirthday,
    StudentYear: contact.StudentYear,
  };
  setEditFormData(formValues);
};
const handleCancelClick= () => {
  setEditContactId(null);
};

const handleDeleteClick=(contactId)=>{
  const newContacts= [...contacts];

  const index= contacts.findIndex((contact)=> contact.id === contactId);

newContacts.splice(index,1);

setContacts(newContacts);
}

  return(<div className="app-container">
    <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th> Student Birthday</th>
            <th>Student Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((contact)=>(
          <Fragment>
            {editContactId=== contact.id? (
              <EditableRow editFormData={editFormData}
              handleEditFormChange={handleEditFormChange}
              handleCancelClick={handleCancelClick}
              />
            ) :  (
              <ReadOnlyRow 
              contact={contact} 
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}/> 
              
            )}
          </Fragment>
        ))}
        </tbody>
      </table>
    </form>
      
      
    <h2> Add a Contact</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input 
      type= "text" 
      name= "StudentID" 
      required="required" 
      placeholder= "Enter student ID..."
      onChange={handleAddFormChange}
      />
      <input 
      type= "text" 
      name= "StudentName" 
      required="required" 
      placeholder= "Enter student's full name..."
      onChange={handleAddFormChange}
      />
      <input 
      type= "text" 
      name= "StudentBirthday" 
      required="required" 
      placeholder= "Enter student's Birthday"
      onChange={handleAddFormChange}
      />
      <input 
      type= "text" 
      name= "StudentYear" 
      required="required" 
      placeholder= "Enter Student's Year"
      onChange={handleAddFormChange}
      />
      <button type= "submit">Add</button>
     </form> 
    </div>);
  
  

  }
export default App;