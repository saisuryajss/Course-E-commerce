import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import data from '../../data';
import './DirectoryMenu.css';
function DirectoryMenu() {
    return (
        <div className='directory-menu'>
            {data.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps}/>
            ))}
        </div>
    );
}

export default DirectoryMenu;
