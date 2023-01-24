import React, { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDetailsContext } from '../../ contexts/UserDetailsContext'
import LoginContext from '../../ contexts/LoginContext'
import Axios from './../../utils/Axios'
import { ToastContainer, toast } from 'react-toastify';
const NavBar = () => {
  const navigate = useNavigate()
  const { login, setLogin } = useContext(LoginContext)
  const { userDetails, edit, admin } = useContext(UserDetailsContext)
  const handleEdit = useCallback(() => {
    navigate("/edit")
  }, [])
  const [user] = userDetails
  const handleSave = () => {
    Axios.post("/user/update", {
      ...user
    }, {
      headers: {
        'authorization': `bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) => {
      toast.success("updated successfully")
    }).catch((error) => {
      console.log("error")
    })
    navigate("/")
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
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        theme="colored"
      />

      <div className="flex justify-center items-center my-2">
        <div className="flex justify-between container py-2">
          <div className="text-white font-bold">
            <h1 className=" bg-gradient-to-r from-cyan-200 to-blue-700 text-transparent bg-clip-text animate-text text-4xl">
              EmpDB
            </h1>
          </div>
          <div>
            <div className='flex gap-5 items-center'>
              {
                admin ? "" : edit ? <>
                  <button className=" text-white rounded-md text-md font-semibold"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </>

                  : ""
              }
              {admin !== undefined && !admin && <button className=" text-white rounded-md font-bold text-md"
                onClick={handleEdit}
              >
                Edit
              </button>
              }
              <button className=" text-white font-bold text-md"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
