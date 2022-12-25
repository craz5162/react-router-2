import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
      const {id, title, body} = post;
      return (
            <div className='post'>
                  <h1>Id : {id}</h1>
                  <h3>title : {title}</h3>
                  <p>body : {body}</p>
                  <button><Link to={`/home/${id}`}>All details</Link></button>
            </div>
      );
};

export default Post;