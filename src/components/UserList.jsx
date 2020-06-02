import React, { useState, useEffect } from 'react';
import jsonplaceholder from '../api/jsonplaceholder';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        jsonplaceholder.get('/users').then(response => console.log(response.data));
    }, []);

    return <div> UserList </div>

};

export default UserList;