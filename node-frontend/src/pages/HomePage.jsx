import React, { useReducer, useRef } from 'react'
import EducationalDetails from '../components/EducationalDetails/EducationalDetails'
import Experiences from '../components/Experiences/Experiences'
import NavBar from '../components/NavBar/NavBar'
import PersonalDetails from '../components/PersonalDetails/PersonalDetails'
import Perferences from '../components/Preferences/Preferences'
import Skills from '../components/Skills/Skills'
import { UserDetailsContext } from '../ contexts/UserDetailsContext'
import { userDetailsReducer } from '../Reducers/userDetailsReducer'
import { useEffect } from 'react'
import Axios from './../utils/Axios.js'

const HomePage = ({ edit, admin }) => {
  const userDetails = useReducer(userDetailsReducer, {
    skills: [],
    experiences: [],
    education: [],
    interests: [],
    sports: [],
  })
  const [user, dispatch] = userDetails
  useEffect(() => {
    Axios.post("/user/getdetails", {}, {
      headers : {
        authorization : `bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) => {
      dispatch({
        type: "SET_DETAILS",
        payload: {
           ...res.data
        }
      })
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  const personaldetailssref = useRef(null)
  const educationref = useRef(null)
  const skillsref = useRef(null)
  const experiencesref = useRef(null)
  const preferencesref = useRef(null)
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: "start" })
  }
  return (
    <>
      <UserDetailsContext.Provider
        value={{
          userDetails,
          edit,
          admin,
        }}>
        <NavBar />
        <div className="container mx-auto grid grid-cols-5 mt-4 text-white">
          <div className="col-span-1">
            <ul className='fixed flex  flex-col gap-2 font-semibold'>
              <li
                className='cursor-pointer'
                onClick={
                  () => scrollToRef(personaldetailssref)
                }>
                Personal Details
              </li>

              <li
                className='cursor-pointer'
                onClick={
                  () => scrollToRef(skillsref)
                }
              >
                Skills
              </li>
              <li
                className='cursor-pointer'
                onClick={
                  () => scrollToRef(experiencesref)
                }
              >
                Experience
              </li>
              <li
                className='cursor-pointer'
                onClick={
                  () => scrollToRef(educationref)
                }
              >
                Education
              </li>
              <li
                className='cursor-pointer'
                onClick={() =>
                  scrollToRef(preferencesref)
                }
              >
                Preferences
              </li>
            </ul>
          </div>
          <div className="col-span-3">
            <div ref={personaldetailssref}>
              <PersonalDetails />
            </div>
            <div ref={skillsref}>
              <Skills />
            </div>
            <div ref={experiencesref}>
              <Experiences />
            </div>
            <div ref={educationref}>
              <EducationalDetails />
            </div>
            <div ref={preferencesref}>
              <Perferences />
            </div>
          </div>
        </div>
      </UserDetailsContext.Provider>
    </>
  )
}

export default HomePage
