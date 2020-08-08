import React from 'react';
import { Redirect } from 'react-router-dom';
import MainLayout from '../layout/Main';
import UnauthLayout from '../layout/Unauthenticated';

function checkAuth() {
  const token = localStorage.getItem('token');
  if (!token) {
    return (
      <>
        <Redirect to="/login" />
        <UnauthLayout />
      </>
    );
  }

  return <MainLayout />;
}

export default checkAuth;
