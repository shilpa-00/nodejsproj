import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from './../../utils/Axios.js'
import { ToastContainer, toast } from 'react-toastify';
import LoginContext from '../../ contexts/LoginContext.js';

const Login = () => {
  const navigate = useNavigate()
  const {login , setLogin} = useContext(LoginContext)
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    Axios.post("/auth/login", {
      ...loginDetails
    }).then((res) => {

      localStorage.setItem('accessToken',res.data.accessToken)
      if(res.data.firstName ==="admin", res.data.lastName==="admin"){
        setLogin({
          ...login,
          admin : true
        })
      }else{
        setLogin({
          ...login,
          user : true,
        })
      }
      navigate("/")
    }).catch((error) => {
      toast.error(error.response.data.error)

    })
  }
  return (
    <>
    <ToastContainer
    autoClose={3000}
    hideProgressBar={true}
    theme="colored"
    />
      <div className='flex justify-center flex-col p-4 items-center bg-[#44475a] rounded-lg'>
        <h1 className='text-2xl font-bold text-white mb-4'>Login</h1>
        <div className='w-64'>
          <div className='mt-2 flex flex-col'>
            <label className="text-white font-bold" >Email</label>
            <input type="email" className='inputfield' name="email" onChange={handleChange} value={loginDetails.email} />
          </div>
          <div className='mt-2 flex flex-col'>
            <label className="text-white font-bold">Password</label>
            <input type="password" className='inputfield' name="password" onChange={handleChange} value={loginDetails.password} />
          </div>
          <div className='flex justify-center mt-4'>
            <button className='bg-cyan-500 text-white rounded-md px-3 py-1'
              onClick={handleSubmit}
            >Login</button>
          </div>
          <p className='text-center mt-4 text-white mr-1'>Don't have an account? <Link to="/register" className='hover:text-blue-500'>Sign up </Link></p>
        </div>
      </div>
    </>
  )
}

export default Login