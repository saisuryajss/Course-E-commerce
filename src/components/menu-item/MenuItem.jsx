import React from 'react';
import './MenuItem.css';
import {useNavigate, useLocation} from 'react-router-dom';

function withRouter(Component){
 const Wrapper=(props)=>{
    const history=useNavigate();
    const location=useLocation();
    return(
        <Component history={history} location={location} {...props} />
    ); 
 }
 return Wrapper;
}

function MenuItem({ title, imageUrl, size, history, linkUrl, location}) {
    return (
        <div  className={`${size} menu-item`} onClick={()=>{
            history(`${location.pathname}${linkUrl}`)}}>
            <div className='image-container' style={{backgroundImage:`url(${imageUrl})`}}>
                
            </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);