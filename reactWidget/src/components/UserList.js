import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import UserItem from './UserItem';
import { fetchUsers } from '../actions/userAction';

class UserList extends React.Component {

    componentDidMount() {
        const userCount = 5;
        this.props.fetchUsers(userCount);
    }

    render() {
        const { users } = this.props;
        const usersList = (users.length == 0) ? null : this.props.users.map((user, id) => {
            return (
                <li key={id}>
                    <UserItem user={user} />
                </li>
            );
        })

        return (
            <ul>
                {usersList}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchUsers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
