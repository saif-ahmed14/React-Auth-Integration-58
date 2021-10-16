import React from 'react';
import useAuth from '../Hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <h3>Username - {user.displayName}</h3>
        </div>
    );
};

export default Home;