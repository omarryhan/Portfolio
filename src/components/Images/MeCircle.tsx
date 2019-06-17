import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


interface DataI {
  placeholderImage: {
    childImageSharp: {
      fluid: {
        aspectRatio: number;
        src: string;
        srcSet: string;
        sizes: string;
        base64?: string;
        tracedSVG?: string;
        srcWebp?: string;
        srcSetWebp?: string;
      };
    };
  };
}

const Image = (): JSX.Element => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "me-circle.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data: DataI): JSX.Element => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="A nice photo of Omar Ryhan"
      />
    )}
  />
);
export default Image;
