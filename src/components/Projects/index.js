import React, { useState, useEffect } from 'react';
import blogPost from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const Projects = (props) => {

  const [Projects, setPost] = useState({});

  //reload the content
  const [postId, setPostId] = useState("");

  useEffect(() => {
    const postId = props.match.params.postId;
    const Projects = blogPost.data.find(post => post.id == postId);
    setPost(Projects);
    setPostId(postId);
  }, [Projects, props.match.params.postId]);

  if (Projects.blogImage === "")
    return null;

  return (
  
    <div>
      <div className="blog-post-container">
        <h3 className="my-5">{Projects.blogTitle}</h3>
        <div className="post-thumb">
          <span className="blog-post-tag">{Projects.blogCategory}</span>
          <img src={Projects.blogImage} style={{ width: "100%" }} />

          {/* <img src={require('../../assets/images/mustang.jpg')} /> */}
        </div>
        <div className="blog-post-text">

          <div>{Projects.blogText}</div>
          <p className="mt-5 text-muted">Posted on: {Projects.postedOn} by {Projects.author}</p>
        </div>

      </div></div>

  )

}

export default Projects;
