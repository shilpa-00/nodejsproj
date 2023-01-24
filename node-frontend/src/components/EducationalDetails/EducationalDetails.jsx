import React from 'react'
import { useContext, useState } from 'react'
import { UserDetailsContext } from '../../ contexts/UserDetailsContext'
import CourseDetail from './CourseDetail'
import editSvg from './../../assets/edit.svg'

const EducationalDetails = () => {
  const { userDetails,edit } = useContext(UserDetailsContext)
  const [user, dispatch] = userDetails
  const [showForm, setShowForm] = useState(false)

  const [edu, setEdu] = useState({
    instituteName: '',
    course: '',
    specialization: '',
    startDate: '',
    endDate: '',
  })
  const handleChange = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value })
  }

  return (
    <div className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-5 mt-5">
      <div className="flex justify-between">
        <h1 className="text-xl mb-2 mt-2 font-bold">EducationalDetails</h1>
        {edit ? (
          <button
            onClick={() => {
              setShowForm(!showForm)
            }}
          >
            <img src={editSvg} alt="" className='h-4 w-4' />
          </button>
        ) : (
          ''
        )}
      </div>

      {showForm && edit && (
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col w-3/4">
            <label htmlFor="instiuteName">Institute Name</label>
            <input
              type="text"
              className="outline-none bg-transparent border-b"
              placeholder="Enter institute name"
              name="instituteName"
              onChange={handleChange}

            />
          </div>
          <div className="flex flex-col w-3/4">
            <label htmlFor="course">Course</label>
            <input
              type="text"
              className="outline-none bg-transparent border-b"
              placeholder="Enter course"
              name="course"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-3/4">
            <label htmlFor="startDate">Start date</label>
            <input
              type="date"
              className=" bg-transparent outline-none border-b"
              placeholder="Enter Start Date"
              name="startDate"
              onChange={handleChange}

            />
          </div>
          <div className="flex flex-col w-3/4">
            <label htmlFor="endDate">End date</label>
            <input
              type="date"
              className="outline-none bg-transparent border-b"
              placeholder="Enter End Date"
              name="endDate"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-3/4">
            <label htmlFor="specialization">Specialization</label>
            <input
              type="text"
              className="outline-none bg-transparent border-b"
              placeholder="Enter specialization"
              name="specialization"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end gap-10 col-span-2">
            <button className="bg-[#ff5555] rounded-md px-1 py-0.5"
              onClick={() => {
              setShowForm(!showForm)
            }}
            >Cancel</button>
            <button className='bg-[#6272a4] rounded-md px-1 py-0.5'
              onClick={ ()=>{
                dispatch({type: 'ADD_EDUCATIONAL_DETAILS', payload: {
                  ...edu
                }})
              }}
            >Add</button>
          </div>
        </div>
      )}

      {
        user?.education?.length ? (
          user?.education?.map((edu, index) => {
            return <CourseDetail key={index} edu={edu}  edit={edit} idx={index} dispatch = {dispatch}/>
          })
        ) : (
          <p className="text-center">No educational details added</p>
        )
      }
    </div>
  )
}

export default EducationalDetails
