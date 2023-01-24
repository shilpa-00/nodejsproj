import {Outlet} from 'react-router-dom'
import bg from './../assets/back.svg'
const AuthPage = ()=>{
    return (

        <div className="h-screen w-screen flex justify-center items-center flex-col bg-bg-pattern">
            <Outlet/>
        </div>
    )
}

export default AuthPage