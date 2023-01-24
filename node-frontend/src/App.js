import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import AdminHome from './pages/AdminHome'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import LoginContext from './ contexts/LoginContext'
import { useEffect } from 'react'
function App() {
  const [login, setLogin] = useState({
    user: false,
    admin: false,
  })
  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      <Router>
        <Routes>
          {
            !login?.user  && !login?.admin ? <>
            <Route path ="/" element ={<AuthPage/>}>
              <Route index element ={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
            </Route>
            </> :""
          }
          {
            login?.user ?
              <>
                <Route path='/' element={<HomePage edit={false} admin={false}/>} />
                <Route path = "/edit" element = {<HomePage edit={true} admin={false}/>}/>
              </>
              :
              ""
          }
          {
            login?.admin ? 
            <>
              <Route path='/' element = {<AdminHome/>}/>
              <Route path = "/admin/employee/:id" element = {<HomePage edit={false} admin={false}/>}/>
            </>
            : ""
          }
         
        </Routes>
      </Router>
    </LoginContext.Provider>
  )
}

export default App
