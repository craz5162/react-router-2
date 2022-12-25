import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPost.css'

const AboutPost = ({about}) => {
      const {id, name, email, postId} = about ;
      return (
            <div className='aboutPost'>
                  <h1>Name : {name}</h1>
                  <h2>Post-Id : {postId}</h2>
                  <h5>Email : {email}</h5>
                  <h3>Id : {id}</h3>
                  <button><Link to={`/about/${id}`}>All details</Link></button>
            </div>
      );
};

export default AboutPost;