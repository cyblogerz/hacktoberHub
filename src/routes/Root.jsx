
import NavBar from '../components/NavBar';
import '../index.css'
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default Root