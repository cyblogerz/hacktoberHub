
import NavBar from '../components/NavBar';
import '../index.css'
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div data-theme="dark" className='h-full'>
    <NavBar />
    <Outlet />
    </div>
  )
}

export default Root