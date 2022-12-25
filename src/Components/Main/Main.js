import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css'

const Main = () => {
      return (
            <div className='main'>
                  <Link to={'/home'}>Post</Link>
                  <Link to={'/about'}>Comment</Link>
            </div>
      );
};

export default Main;