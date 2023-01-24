import React, { useContext, useState } from 'react'
import { UserDetailsContext } from '../../ contexts/UserDetailsContext'
import editSvg from './../../assets/edit.svg'
import deleteSvg from './../../assets/delete.svg'
const Experiences = () => {
  const { userDetails ,edit} = useContext(UserDetailsContext)
  const [user, dispatch] = userDetails
  const [showForm, setShowForm] = useState(false)
  const [exp, setExp] = useState({
  })
  const handleChange = (e) => {
    setExp({ ...exp, [e.target.name]: e.target.value })
  }

  return (
    <div className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-5 mt-5">
      <div className="flex justify-between">
        <h1 className="text-xl mb-2 mt-2 font-bold">Experiences</h1>
        {edit ? (
          <button
            onClick={() => {
              setShowForm(!showForm)
            }}
          >
            <img src={editSvg} alt="" className="h-4 w-4" />
          </button>
        ) : (
          ''
        )}
      </div>
      {showForm && edit && (
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col w-3/4">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              name="companyName"
              className="outline-none bg-transparent border-b"
              placeholder="Enter company name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-3/4">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name='role'
              className="outline-none bg-transparent border-b"
              placeholder="Enter role"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-3/4">
            <label htmlFor="startDate">Start date</label>
            <input
              type="date"
              name='startDate'
              className=" bg-transparent  outline-none border-b"
              placeholder="Enter Start Date"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-3/4">
            <label htmlFor="endDate">End date</label>
            <input
              type="date"
              name='endDate'
              className="outline-none bg-transparent border-b"
              placeholder="Enter End Date"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col  col-span-2">
            <label htmlFor="about">Work Experience</label>
            <textarea
              type="text"
              className="outline-none overflow-auto bg-transparent resize-none border rounded-sm p-2 h-40"
              placeholder="tell about your work experience"
              name='about'
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end gap-10 col-span-2">
            <button className="bg-[#ff5555] rounded-md px-1 py-0.5"
              onClick={() => {
                setExp({
                  companyName: '',
                  role: '',
                  startDate: '',
                  endDate: '',
                  about: ''
                })
                setShowForm(false)
              }}
            >
              Cancel
            </button>
            <button className="bg-[#6272a4] rounded-md px-1 py-0.5"
              onClick={() => {
                dispatch({
                  type: 'ADD_EXPERIENCE',
                  payload: { ...exp }
                })
              }} skills
            >Add</button>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-5 mt-2">
        {
          user?.experiences?.length ? user?.experiences?.map((experience, idx) => (
            <div className="flex flex-col" key={idx}>
              <div className="flex ">
                <h1 className="text-lg font-bold">{experience.role}</h1>
                {edit ? (
                  <button
                    onClick={() => {
                      dispatch({ type: "REMOVE_EXPERIENCE", payload: idx })
                    }}
                  >
                    <img
                      src={deleteSvg}
                      alt=""
                      className="ml-5 hover:bg-red-500 rounded-sm"
                    />
                  </button>
                ) : ('')}
              </div>
              <h1 className="text-sm">{experience.startDate} - {experience.endDate ? experience.endDate : "present"}</h1>
              <p>{experience.companyName}</p>
              <p>
                {experience.about}
              </p>
            </div>
          )) :
            <div className="text-center text-md font-semibold">
              No Experiences
            </div>
        }
      </div>
    </div>
  )
}

export default Experiences
