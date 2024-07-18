import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useCommonContext } from '../../context/CommonContext';
import Header from '../Header/Header';
import Auth from '../AuthUser/Auth';

const Layout = () => {
  const { state } = useCommonContext();
  console.log(state)
  return (
    <Fragment>
      <Header />
      {state.isAuthbarOpen && <Auth />}
      <Outlet />
    </Fragment>
  );
};

export default Layout;
