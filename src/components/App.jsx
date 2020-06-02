import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UserList from './UserList'
import User from './User'

const App = () => {

    return (
        <div>
            <h2>Users</h2>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={UserList} />
                    <Route path='/user/:id' component={User} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;