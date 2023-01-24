import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers'
import React, { useCallback, useContext, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { UserDetailsContext } from '../../ contexts/UserDetailsContext'
import deleteSvg from './../../assets/delete.svg'
const Skills = () => {
  const { userDetails, edit } = useContext(UserDetailsContext)
  const [user, dispatch] = userDetails
  const inputRef = useRef(null)
  const handleAddSkill = useCallback(() => {
    if (! (user?.skills?.includes(inputRef.current.value)) ) {
      dispatch({ type: "ADD_SKILL", payload: inputRef.current.value })
      inputRef.current.value = ""
    }
    else {
      toast.warn("Skill already exists", {
        autoClose: 2000,
        theme: "colored"
      })
    }
  }, [])
  return (
    <>
      <ToastContainer />
      <div className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-5 mt-5">
        <h1 className="text-xl mb-2 font-bold">Skills</h1>
        {
          edit ?
            <div className='mb-4'>
              <input type="text" className='border-b bg-transparent outline-none' placeholder='Add skill'
                ref={inputRef}
              />
              <button className='bg-cyan-200 rounded-sm px-1 ml-5'
                onClick={handleAddSkill}
              >Add</button>
            </div>
            : ""
        }
        <div className="flex flex-wrap gap-5">
          {user.skills.map((item, idx) =>
            <div key={idx} className='rounded-2xl bg-[#44475a] p-2 flex justify-center items-center'>
              {item}
              {edit ?
                <button className='ml-1 text-sm rounded-full p-1 hover:bg-red-500' value={idx}
                  onClick={() => dispatch({ type: "REMOVE_SKILL", payload: idx })}
                >
                  <img src={deleteSvg} alt="" className='h-4 w-4' />
                </button>
                :
                ""
              }
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Skills
