import React, { useState, useContext } from 'react'
import EmpCardList from '../components/EmpCardList/EmpCardList'
import SearchBar from '../components/SearchBar/SearchBar'
import Axios from './../utils/Axios.js'
import LoginContext from '../ contexts/LoginContext'
import { useNavigate } from 'react-router-dom'
const AdminHome = () => {
  const navigate = useNavigate()
  const { login, setLogin } = useContext(LoginContext)
  const searchValueState = useState({
    searchvalue: '',
    type: 'firstName'
  })
  const [searchValues] = searchValueState
  const [searchResults, setSearchResults] = useState([])
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchValues.searchvalue !== '') {
      Axios.post('/admin/search', {
        ...searchValues
      }).then((response) => {
        const results = response.data.data
        setSearchResults(results)
      })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  const handleSignOut = () => {
    if (localStorage.getItem("accessToken")) {
      localStorage.removeItem("accessToken")
      setLogin({
        user: false,
        admin: false,
      })
      navigate("/")
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="container flex justify-between my-4">
          <div className="text-white font-bold">
            <h1 className=" bg-gradient-to-r from-cyan-200 to-blue-700 text-transparent bg-clip-text animate-text text-4xl">
              EmpDB
            </h1>
          </div>
          <div className='flex justify-between w-44  '>
            <button className='mr-1 text-white font-bold rounded-md px-1 py-1 text-md hover:border hover:border-red-600'
              onClick={handleSignOut}
            >Sign Out</button>
          </div>
        </div>
        <SearchBar searchValueState={searchValueState} handleSearch={handleSearch} />
        <EmpCardList searchResults={searchResults} />
      </div>
    </>
  )
}

export default AdminHome
