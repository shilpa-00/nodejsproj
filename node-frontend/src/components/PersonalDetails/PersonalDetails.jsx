import React from 'react'
import { useContext } from 'react'
import { UserDetailsContext } from '../../ contexts/UserDetailsContext'
import { userDetailsReducer } from '../../Reducers/userDetailsReducer'

const PersonalDetails = () => {
  const {userDetails,edit,admin}= useContext(UserDetailsContext)
  const [user, dispatch]  = userDetails
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-5">
      <h1 className="text-xl mb-2 font-bold">Personal Details</h1>
      <div className="grid grid-cols-2 ">
        <div className="grid grid-rows-3 gap-5">
          <div className='flex flex-col'>
            <label className="text-sm text-zinc-300">First Name</label>
            <input type="text" readOnly className={`outline-none bg-transparent`} value={user?.firstName}
            />
          </div>
          <div  className='flex flex-col'>
            <label className="text-sm text-zinc-300">Last Name</label>
            <input type="text" readOnly className={`outline-none bg-transparent`} value={user?.lastName}
            />
          </div>
          <div  className='flex flex-col w-fit'>
            <label className="text-sm text-zinc-300">Employee ID</label>
            <input type="text" readOnly={!edit} className={`outline-none bg-transparent ${edit ? 'border-b' : ''}`} value={user.empID}
              onChange={
                (e)=>{
                  dispatch({
                    type : "CHANGE_EMPID",
                    payload : e.target.value
                  })
                }
              }

            />
          </div>
        </div>
        <div className='grid grid-rows-3 gap-5'>
          <div  className='flex flex-col'>
            <label className='text-sm text-zinc-300'>Email</label>
            <input type="text" readOnly className={`outline-none bg-transparent`} value={user.email}
            />
          </div>
          <div  className='flex flex-col w-fit'>
            <label className="text-sm text-zinc-300">Phone Number</label>
            <input type="text" readOnly={!edit} className={`outline-none bg-transparent ${edit ? 'border-b' : ''}`} value={user.phonenumber }
              onChange={(e)=>{
                dispatch({
                  type : "CHANGE_PHNO",
                  payload : e.target.value
                })
              }}
            />
          </div>
          <div  className='flex flex-col w-fit'>
            <label className='text-sm text-zinc-300'>Date of Birth</label>
            <input type="date" readOnly={!edit} className={`outline-none bg-transparent ${edit ? 'border-b' : ''}`} value={user.dob}
              onChange={
                (e)=>{
                  
                  dispatch({
                    type : "CHANGE_DOB",
                    payload : e.target.value
                  })
                }
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetails
