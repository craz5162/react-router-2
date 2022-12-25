import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './OutHome.css'

const OutHome = () => {
      const outHome = useLoaderData();
      const {id, userId, title, body} = outHome;
      return (
            <div className='outHome'>
                  <h1>ID : {id}</h1>
                  <h3>User-Id : {userId}</h3>
                  <h2>Title : {title}</h2>
                  <p>Body : {body}</p>
            </div>
      );
};

export default OutHome;