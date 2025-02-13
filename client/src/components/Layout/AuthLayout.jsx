import {Outlet} from 'react-router';
import login from '../../assets/login.webp';
const AuthLayout = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-12"> 
        <Outlet />
      </div>
      <div className="hidden lg:block md:w-1/2 bg-gray-800">
        <div className='h-full flex flex-col justify-center items-center'>
          <img src={login} alt="image" className='object-cover w-full h-[700px]' />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout