import React from 'react';
import PropTypes from 'prop-types';

const UserItem = (props) => {
    const { user } = props;
    const fullName = `${user.name.first} ${user.name.last}`;
    return (
        <div>
            <img src={user.picture.thumbnail} alt={fullName} />
            <div>
                <span>{fullName}</span>
                <span>{ user.email }</span>
            </div>
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.object
};


export default UserItem;
