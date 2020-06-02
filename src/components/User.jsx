import React, { useState, useEffect } from 'react'; import jsonplaceholder from '../api/jsonplaceholder';


const User = props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        jsonplaceholder
            .get(`/users/${props.match.params.id}`)
            .then(response => {
                const { name, email, phone } = response.data;
                setName(name);
                setEmail(email);
                setPhone(phone);
            });
    }, [props.match.params.id]);


    return (
        <div>
            <h3>Name: {name}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>)

};

export default User;
