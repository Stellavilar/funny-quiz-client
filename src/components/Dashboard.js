import React, { useState, useEffect }from 'react';
import Slides from './Slides';
import Header from './Header';
import ItemMenu from './ItemMenu';
import axios from 'axios';

function Dashboard () {
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
            <ItemMenu tag={tag} level={level}/>
            <Slides />
        </div>
    );
};

export default Dashboard;