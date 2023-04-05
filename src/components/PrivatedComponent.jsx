import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const privateComponent = () => {
    const authUser = localStorage.getItem('user');
    return authUser ? <Outlet /> : <Navigate to='/signup' />
}

export default privateComponent;