import React from 'react';
import { Outlet } from 'react-router-dom';
import Main from '../Main/Main';

const Link = () => {
      return (
            <div>
                  <Main></Main>
                  <Outlet></Outlet>
            </div>
      );
};

export default Link;