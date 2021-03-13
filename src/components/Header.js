import React from 'react';
import logo from '../img/FUNNY QUIZ.jpg';
import { Search } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import BurgerButton from './BurgerButton'

function Header () {
    return (
        <div className="header">
            <Link to='/'>
                <img src={logo} alt="Funny quiz logo"/>
            </Link>
            <Search />
            <i className="user circle icon"></i>
            <BurgerButton />
        </div>
    );
};

export default Header;