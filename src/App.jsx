import React, {useState} from 'react';
import './App.css';
import data from "./mock-data.json";
import{nanoid} from 'nanoid';
import ReadOnlyRow from "./Components/ReadOnlyRow";

const App=() => {
  const [contacts,setContacts]= useState(data);
  const [addFormData, setAddFormData]= useState({
    StudentID: '',
    StudentName: '',
    StudentBirthday:'',
    StudentYear:'',
  });
  
const handleAddFormChange= (event)=> {
  event.preventDefault();

  const fieldName= event.target.getAttribute('name')
  const fieldValue= event.target.value;

  const newFormData= {... addFormData};
  newFormData[fieldName]= fieldValue;

  setAddFormData(newFormData); 
};

const handleAddFormSubmit=(event)=>{
  event.preventDefault();

  const newContact={
    id: nanoid(),
    StudentID: addFormData.StudentID,
    StudentName:addFormData.StudentName,
    StudentBirthday:addFormData.StudentBirthday,
    StudentYear:addFormData.StudentYear
  };
  const newContacts= [...contacts, newContact];
  setContacts(newContacts);
};

  
  
  return <div className="app-container">
    <table>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Student Name</th>
          <th> Student Birthday</th>
          <th>Student Year</th>
        </tr>
      </thead>
      <tbody>
      {contacts.map((contact)=>(
        <ReadOnlyRow contact={contact}/> 
      ))}
        
      </tbody>
    
    </table>
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
  </div>
  
};

export default App;