import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jsonplaceholder from '../api/jsonplaceholder';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        jsonplaceholder
            .get('/users')
            .then(response => setUsers(response.data));
    }, []);

    const userList = users.map(item => {
        return (
        <li key={item.id}>
            <Link to={`/user/${item.id}`} >
            {item.name}
            </Link>
        </li>)
    });

    return (<div>
        <ul> {userList}</ul>
    </div>);

};

export default UserList;