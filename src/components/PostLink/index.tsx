import React from 'react';
import { Link } from 'gatsby';

interface PostI {
  post: {
    frontmatter: {
      title: string;
      date: string;
      path: string;
    };
  };
}

const PostLink = ({ post }: PostI): JSX.Element => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title}
      {' '}
    (
      {post.frontmatter.date}
    )
    </Link>
  </div>
);

export default PostLink;
