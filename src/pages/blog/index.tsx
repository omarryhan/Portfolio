import React from 'react';
import { graphql } from 'gatsby';
import PostLink from '../../components/PostLink';


interface EdgeI {
  node: {
    excerpt: string;
    id: string;
    frontmatter: {
      date: string;
      path: string;
      title: string;
    };
  };
}

interface DataI {
  data: {
    allMarkdownRemark: {
      edges: EdgeI[];
    };
  };
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: DataI): JSX.Element => {
  console.log(edges);
  const Posts = edges
    .filter((edge: EdgeI): boolean => !!edge.node.frontmatter.date)
    .map((edge: EdgeI): JSX.Element => <PostLink key={edge.node.id} post={edge.node} />);

  return <div>{Posts}</div>;
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`;
