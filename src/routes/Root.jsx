
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../index.css'
import { Outlet } from 'react-router-dom';

const Root = () => {
  // Check if a theme is stored in local storage, if not, use 'dark' as default.
  const initialTheme = localStorage.getItem('theme') || 'dark';

  const [theme, setTheme] = useState(initialTheme);

  // Update local storage whenever the theme changes.
  const themeHandler = (val, name) => {
    setTheme(name);
    localStorage.setItem('theme', name);
  }

  useEffect(() => {
    // Add an event listener to update the theme if the localStorage changes in another tab or window.
    const storageChangeHandler = (e) => {
      if (e.key === 'theme') {
        setTheme(e.newValue);
      }
    };

    window.addEventListener('storage', storageChangeHandler);

    return () => {
      window.removeEventListener('storage', storageChangeHandler);
    };
  }, []);
  
  return (
    <div data-theme={theme} className='min-h-screen  overflow-x-hidden'>
    <NavBar  onThemeChange={themeHandler}/>
    <Outlet />
    </div>
  )
}

export default Root