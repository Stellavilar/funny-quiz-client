import React, { useState, useEffect } from 'react';
import logo from '../img/FUNNY QUIZ.jpg';
import { Search } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import BurgerButton from './BurgerButton';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function Header () {
    const history = useHistory();
    /**Search */
    const [ searchText, setSearchText ] = useState("");
    const [ results, setResults ] = useState({});
    
    const getResults = (e) => {
        axios.get('subcategories')
        .then((res) => {
            setResults(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    };

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };
    const getQuiz = (id) => {
        history.push(`/classifiedQuiz/${id}`)
    }
    
    useEffect(() => { getResults() }, []);

    return (
        <div className="header">
            <Link to='/'>
                <img src={logo} alt="Funny quiz logo"/>
            </Link>
            <Search
                value={searchText}
                onSearchChange={handleChange}
                results={results}
                onResultSelect={(e, data) =>
                    getQuiz(data.result.id)
                   }
            />
            <i className="user circle icon"></i>
            <BurgerButton />
        </div>
    );
};

export default Header;