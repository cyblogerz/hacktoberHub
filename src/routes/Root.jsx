
import { useState } from 'react';
import NavBar from '../components/NavBar';
import '../index.css'
import { Outlet } from 'react-router-dom';

const Root = () => {
  const [theme,setTheme] = useState("dark");
  const themeHandler = (val) =>{
    setTheme(val);
  }

  return (
    <div data-theme={theme} className='h-full'>
    <NavBar  onThemeChange={themeHandler}/>
    <Outlet />
    </div>
  )
}

export default Root