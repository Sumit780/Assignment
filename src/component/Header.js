import React from 'react';
import Menu from './assets/menu.svg';
import logo from './assets/wastoxpress.jpg';
import logout from './assets/logout.svg'

class Header extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <nav className="navbar navbar-light header-background">
                <a className="navbar-brand" href="#">
                    <img src={Menu} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy"/>
                    <img src={logo} className="logo"alt=""/>
                </a>
                <span className="navbar-text">
                <button className="btn btn-light"> <span><img src={logout} className="logout-padding" alt=""></img></span>Logout</button>
                </span>
            </nav>
            </>
        )
    }
}

export default Header;