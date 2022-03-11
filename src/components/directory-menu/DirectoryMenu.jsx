import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import { createStructuredSelector } from 'reselect';
import { selectDirectoryData } from '../../redux/directory/directorySelector';
import { connect } from 'react-redux';
import './DirectoryMenu.css';

function DirectoryMenu({ data }) {
    return (
        <div className='directory-menu'>
            {data.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    data: selectDirectoryData
});
export default connect(mapStateToProps)(DirectoryMenu);
