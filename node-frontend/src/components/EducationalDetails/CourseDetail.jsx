import React from 'react'
import deleteSvg from './../../assets/delete.svg'
const CourseDetail = ({ edit, edu, idx, dispatch }) => {

  return (
    <>
      <div className="grid grid-cols-2 mt-2">
        <div className="grid grid-rows-3 gap-5">
          <div className='flex flex-col'>
            <label className="text-sm text-zinc-300">Institute Name</label>
            <p>{edu.instituteName}</p>
          </div>
          <div>
            <p className="text-sm text-zinc-300">Course</p>
            <p>{edu.course}</p>
          </div>
          <div>
            <p className="text-sm text-zinc-300">Specialization</p>
            <p>{edu.specialization}</p>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-5">
          <div>
            <div className='flex justify-between'>
              <p className="text-sm text-zinc-300">Start Date</p>
              {edit ? (
                <button
                  onClick={() => {
                    dispatch({ type: 'DELETE_EDUCATION', payload: idx })
                  }}
                >
                  <img
                    src={deleteSvg}
                    alt=""
                    className="ml-5 hover:bg-red-500 rounded-sm"
                  />
                </button>
              ) : (
                ''
              )}
            </div>
            <p>{edu.startEnd}</p>
          </div>
          <div>
            <p className="text-sm text-zinc-300">End Date</p>
            <p>{
              edu.endDate  ? edu.endDate : "Present"
            } </p>
          </div>
        </div>
      </div>
      <div className='border opacity-30 mt-5'></div>
    </>
  )
}

export default CourseDetail
