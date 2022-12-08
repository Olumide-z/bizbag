import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { data } from './navbarData';
import './navbar.css';


const Navbar= () => {
    const [show, setShow] = useState(true);
    const [toggleMenu, setToggleMenu] = useState(false);

    const controlNavbar = () => {
        if(!window.scrollY){
            setShow(true)
        }else if(window.scrollY < 70){
            setShow(false)
        }else if(window.scrollY >= 200){
            setShow(true)
        }
    }

    useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
    
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }, [])
    

  return (
    <div className={ show ? 'navbar' : 'notActive'}>
        <div className="navbar__logo">
            <img src='/assets/logo.png' alt='logo' />
        </div>

        <div className="navbar__links">
            {data.map((item) => (
                <NavLink 
                    to={`/${item.links}`} 
                    key={item.id}
                    className='navbar__links-link'
                    style={({ isActive }) => ({
                        background: isActive ? "#ffb100" : undefined,
                        color: isActive ? 'white' : undefined
                    })}
                >
                    <p>{item.name}</p>
                </NavLink>
            ))}
        </div>

        <div className="navbar__menubar" onClick={() => setToggleMenu(!toggleMenu)}>
            <div className="navbar__menubar-icons">
                <div className ={toggleMenu ? 'line1' : ''}></div>
                <div className={toggleMenu ? 'line2' : ''}></div>
                <div className={toggleMenu ? 'line3' : ''}></div>
            </div>
        </div>

        <div className={ toggleMenu ? "navbar__menu active" : 'navbar__menu' }>
            {data.map((item) => (
                <NavLink 
                    to={`/${item.links}`} 
                    key={item.id}
                    className='navbar__menu-link'
                    style={({ isActive }) => ({
                        background: isActive ? "#ffb100" : undefined,
                        color: isActive ? '#ffb100' : undefined
                    })}
                    onClick={() => setToggleMenu(false)}
                >
                    <p>{item.name}</p>
                </NavLink>
            ))}
        </div>

    </div>
  )
}

export default Navbar