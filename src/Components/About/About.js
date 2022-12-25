import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AboutPost from '../AboutPost/AboutPost';
import './About.css'

const About = () => {
      const abouts = useLoaderData();
      return (
            <div>
                  <h1>hi iam comments group</h1>
                  <div className="abouts">
                  {
                        abouts.map(about => <AboutPost
                        key={about.id}
                        about ={about}
                        ></AboutPost>)
                  }
                  </div>
            </div>
      );
};

export default About;