import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UserList from './UserList'

const App = () => {

    return (
        <div>
            <h2>Users</h2>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={UserList} />
                    <Route path='/user/:id' />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;