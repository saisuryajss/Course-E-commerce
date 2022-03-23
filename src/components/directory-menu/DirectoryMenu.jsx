import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import { createStructuredSelector } from 'reselect';
import { selectDirectoryData } from '../../redux/directory/directorySelector';
import { useSelector } from 'react-redux';
import './DirectoryMenu.css';

function DirectoryMenu() {
    const data=useSelector(selectDirectoryData);
    return (
        <div className='directory-menu'>
            {data.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </div>
    );
}

export default DirectoryMenu;
