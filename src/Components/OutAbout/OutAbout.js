import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './OutAbout.css'

const OutAbout = () => {
      const outAbout = useLoaderData();
      const {name, id, userId, body, email} = outAbout ;
      return (
            <div className='outAbout'>
                  <h1>Id : {id}</h1>
                  <h3>Name : {name}</h3>
                  <h2>User-Id : {userId}</h2>
                  <h4>Email : {email}</h4>
                  <p>Body : {body}</p>
                  

            </div>
      );
};

export default OutAbout;