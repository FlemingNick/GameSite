import React from 'react';
import {Link} from 'react-router-dom';
import './News.modules.css';

const News = props => {

    return(
        <div className='NewsContainer'>
            <h3>{props.headline}</h3>
            <img src={props.imagelink}/>
            <p>{props.teaser}</p>
            <Link to='/' className='More'>Mehr</Link>
        </div>
    )
};

export default News;
