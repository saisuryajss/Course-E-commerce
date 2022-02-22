import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import data from '../../data';
import './DirectoryMenu.css';
function DirectoryMenu() {
    return (
        <div className='directory-menu'>
            {data.map(({ title, imageUrl, id, size }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
            ))}
        </div>
    );
}

export default DirectoryMenu;
