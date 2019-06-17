import React from 'react';
import { graphql } from 'gatsby';


type dataType = {
  data: {
    markdownRemark: {
      frontmatter: {
        path: string;
        title: string;
      };
      html: string;
    };
  };
}

/* eslint-disable react/no-danger */
export default function Template({
  data,
}: dataType): JSX.Element {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export const pageQuery = graphql`
query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date
      path
      title
    }
  }
}
`;
