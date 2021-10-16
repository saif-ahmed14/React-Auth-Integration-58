import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="text" />
                <input type="password" />
                <input type="submit" value='sbumit' />
            </form>
            <Link to='/login'>Already Registered?</Link>
        </div>
    );
};

export default Register;