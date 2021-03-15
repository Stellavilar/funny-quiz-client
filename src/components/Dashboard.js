import React, { useState, useEffect }from 'react';
import Slides from './Slides';
import Header from './Header';
import ItemMenu from './ItemMenu';
import axios from 'axios';

function Dashboard () {

    /**Check if an user is connected and get its username */
    const userName = localStorage.getItem('username');
    /**Get tags */
  const [ tag, setTag] = useState([]);
  const tags = () => {
        axios
        .get( 'tags')
        
        .then((res) => {
            setTag(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    };
    
  /**get levels */
  const [ level, setLevel ] = useState([]);
  const levels = () => {
    axios
    .get('levels')
    .then((res) => {
        setLevel(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
  };

  useEffect(() => levels(), []);
  useEffect(() => tags(), []);


    return (
        <div className="dashboard">
            <Header />
            {userName ? <h3 className="username">Hello {userName} !</h3> : null}
            <ItemMenu tag={tag} level={level}/>
            <Slides />
        </div>
    );
};

export default Dashboard;