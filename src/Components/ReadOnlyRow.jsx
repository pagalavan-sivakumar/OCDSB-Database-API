import React from 'react'

const ReadOnlyRow = ({contact}) => {
  return (
  <tr>
          <td>{contact.StudentID}</td>
          <td>{contact.StudentName}</td>
          <td> {contact.StudentBirthday}</td>
          <td>{contact.StudentYear}</td>
        </tr>
  )
}

export default ReadOnlyRow