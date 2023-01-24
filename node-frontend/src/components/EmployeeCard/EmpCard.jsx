import React from 'react'
import { useNavigate } from 'react-router-dom'
const EmpCard = ({ values }) => {
  const {
    firstName,
    lastName,
    email,
    phonenumber, 
  } = values

  return (
    <div className="grid grid-cols-2 gap-2 bg-[#44475a] text-white rounded-lg p-2">
      <div className='flex flex-col'>
        <p>First Name</p>
        <p>{firstName}</p>
      </div>
      <div className='flex flex-col'>
        <p>last name</p>
        <p>{lastName}</p>
      </div>
      <div className='flex flex-col'>
        <p>email</p>
        <p>{email}</p>
      </div>
      <div className='flex flex-col'>
        <p>Phone Number</p>
        <p>
          {phonenumber ? phonenumber : 'Not Provided'}
        </p>
      </div>
    
    </div>
  )
}

export default EmpCard
