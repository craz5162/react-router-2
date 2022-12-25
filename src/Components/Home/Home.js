import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import "./Home.css"

const Home = () => {
      const posts = useLoaderData()
      return (
            <div>
                  <h1>hi iam post group</h1>
                  <div className="posts">
                  {
                        posts.map(post =><Post
                        key={post.id}
                        post ={post}
                        ></Post>)
                  }
                  </div>
            </div>
      );
};

export default Home;