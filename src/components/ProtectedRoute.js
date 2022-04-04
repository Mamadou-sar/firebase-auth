import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContextAuth } from './UserContextFirebase';

function ProtectedRoute({ children }) {
   let { user } = useContext(userContextAuth);
   if (!user) {
      return <Navigate to='/' />;
   }
   return children;
}

export default ProtectedRoute;
