import  React,{ useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';
import PropTypes from 'prop-types';


const PrivateRoute = ({ element, redirectPath = '/loginPage' }) => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Navigate to={redirectPath} replace />;
    }

    return element;
};

export default PrivateRoute;