import logo from'../images/logo.svg';
import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
function Header(){
  // {loggedIn, onSingOut, authorizationUserEmail}
  // const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  // function handleToggleMenu() {
  //   setMenuIsOpen(!menuIsOpen);
  // }

  // function handleSignOut() {
  //   setMenuIsOpen(false);
  //   onSingOut();
  // }
    return(
    <header className='header'>
        <img className="header__logo" src={logo} alt="лого"/>
          {/* {loggedIn &&
         (
        <div
          className={menuIsOpen ? 'header__menu-contaner header__menu-contaner_opened' : 'header__menu-contaner'}
        >
          <address
            className="header__address"
          >
            {authorizationUserEmail && authorizationUserEmail}
          </address>
          <button
            className="header__button"
            type="button"
            onClick={handleSignOut}
          >
            Выйти
          </button>
        </div>
        )
        }
        {!loggedIn &&
          (<nav className='header__menu-contaner'>
              (
                <BrowserRouter>
                <NavLink
                  className="header__navlink"
                  to="/sign-up"
                >
                  Регистрация
                </NavLink>
                <NavLink
                  className="header__navlink"
                  to="/sign-in"
                >
                  Войти
                </NavLink>
                </BrowserRouter>
              )
          </nav>
        )
        } */}
    </header>
    );
}
export default Header