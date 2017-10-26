import React from 'react';

export default class UserItem extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                <img src={user.picture.thumbnail} />
                <div>
                    <span>{ user.name.first } { user.name.last }</span>
                    <span>{ user.email }</span>
                </div>
            </div>
        );
    }
}
