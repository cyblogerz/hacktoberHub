
import { useState } from 'react';
import NavBar from '../components/NavBar';
import '../index.css'
import { Outlet } from 'react-router-dom';

const Root = () => {
  const [theme,setTheme] = useState("dark");
  const themeHandler = (val,name) =>{
    setTheme(name);
  }

  return (
    <div data-theme={theme} className='min-h-screen'>
    <NavBar  onThemeChange={themeHandler}/>
    <Outlet />
    </div>
  )
}

export default Root