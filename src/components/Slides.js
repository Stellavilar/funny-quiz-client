import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import axios from 'axios';

function Slides () {

    /**Get subcategories */
    const [ category, setCategory ] = useState ([]);
    const categories = () => {
        axios.get('subcategories')
        .then((res) => {
            setCategory(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    };

    useEffect(() => { categories() }, []);

    /**Create slides */
    const subCategories = category.map((cat, index) => 
        <div className="each-slide" key={cat.id} >
            <Link to={`/classifiedQuiz/${cat.id}`}>
                <div className ="carousel" style={{'height' : '460px' , 'borderRadius' : '15px' }}>
                    <p>{cat.title}</p>
                </div>
            </Link>
        </div>
    )

    return (
        <div className='slides'>
            <Slide>
                  {subCategories} 
            </Slide>
        </div>
    );
};

export default Slides;