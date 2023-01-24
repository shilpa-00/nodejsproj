import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from './../../utils/Axios.js'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  const [registerDetails, setRegisterDetails] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": ""
  })
  const handleChange = (e) => {
    setRegisterDetails({
      ...registerDetails,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!registerDetails.email || !registerDetails.firstName || !registerDetails.lastName || !registerDetails.password) {
      toast.warn("Fields can't be empty")
    } else {
      Axios.post("/auth/register", {
        ...registerDetails
      }).then((res) => {
      
        navigate("/")
      }).catch((error) => {
        toast.error(error.response.data.error)

      })
    }

  }
  return (
    <>
    <ToastContainer
    autoClose={3000}
    hideProgressBar={true}
    theme="colored"
    />
      <div className='flex justify-center flex-col p-8 items-center bg-[#44475a] rounded-lg'>
        <h1 className='text-2xl font-bold text-white mb-4'>Register</h1>
        <div className='w-64'>
          <div className='mt-2 flex flex-col'>
            <label className="text-white font-bold" >Firstname</label>
            <input type="text" className='inputfield'
              value={registerDetails.firstName}
              onChange={handleChange}
              name="firstName"
            />
          </div>
          <div className='mt-2 flex flex-col'>
            <label className="text-white font-bold" >Lastname</label>
            <input type="text" className='inputfield'
              name="lastName"
              value={registerDetails.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='mt-2 flex flex-col'>
            <label className="text-white font-bold" >Email</label>
            <input type="email" className='inputfield'
              name="email"
              value={registerDetails.email}
              onChange={handleChange}
            />
          </div>
          <div className='mt-2 flex flex-col'>
            <label className="text-white font-bold" >Password</label>
            <input type="password" className='inputfield'
              name="password"
              value={registerDetails.password}
              onChange={handleChange}
            />
          </div>
          <div className='flex justify-center mt-4'>
            <button className='bg-cyan-500 text-white rounded-md px-1'
              onClick={handleSubmit}
            >Register</button>
          </div>
          <p className='text-center mt-4 text-white mr-1'>Already Registered? <Link to="/" className='hover:text-blue-500'> Login</Link></p>
        </div>
      </div>
    </>
  )
}

export default Register