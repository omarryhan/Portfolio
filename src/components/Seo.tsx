/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';


interface Props {
  title: string;
  description?: string;
  lang?: string;
  meta?: {name: string; content: string}[];
  keywords?: string[];
  image?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTags?: string;
}

const SEO: React.FC<Props> = ({
  title,
  lang = 'en',
  meta = [],
  keywords = [],
  description = '',
  image = '',
  articlePublishedTime = '',
  articleModifiedTime = '',
  articleSection = '',
  articleTags = '',
}: Props): any => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitter
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          property: 'profile:first_name',
          content: 'Omar',
        },
        {
          property: 'profile:last_name',
          content: 'Ryhan',
        },
        {
          property: 'article:published_time',
          content: articlePublishedTime,
        },
        {
          property: 'article:modified_time',
          content: articleModifiedTime,
        },
        {
          property: 'article:author',
          content: 'Omar Ryhan',
        },
        {
          property: 'article:section',
          content: articleSection,
        },
        {
          property: 'article:tag',
          content: articleTags,
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.twitter,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: image,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: 'keywords',
              content: keywords.join(', '),
            }
            : [],
        )
        .concat(meta)}
    />
  );
};

export default SEO;
