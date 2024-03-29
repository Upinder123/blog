

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import blogPost from '../../data/blog.json';

/**
* @author
* @function AllPosts
* */

const AllPosts = (_props) => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const posts = blogPost.data;
    setPosts(posts);
  }, posts);

  return (

    <div className="row">

      {
  posts.map((post) => (

    <div className="col-md-3">

      <img src={post.blogImage} style={{ width: '100%' }} />

      <p className="lead">
        <NavLink key={post.id} to={`/post/${post.id}`}>
          {' '}
          <div className="post-title">{post.blogTitle}</div>
          {' '}
        </NavLink>

      </p>

    </div>

  ))
}

    </div>
  );
};

export default AllPosts;
