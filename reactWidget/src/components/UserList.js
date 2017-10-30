import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/userAction';

import UserItem from './UserItem';


class UserList extends React.Component {
    componentDidMount() {
        const userCount = 5;
        this.props.fetchUsers(userCount);
    }

    render() {
        const { users } = this.props;
        const usersList = (users.length == 0) ? null : this.props.users.map((user) =>
            (
                <li key={user.email}>
                    <UserItem user={user} />
                </li>
            ));

        return (
            <ul>
                {usersList}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUsers }, dispatch);
}

UserList.propTypes = {
    fetchUsers: PropTypes.func,
    users: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
