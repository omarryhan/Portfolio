/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description, lang, meta, keywords, title, image,
  articlePublishedTime, articleModifiedTime, articleSection,
  articleTags,
}) {
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
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
  image: '',
  articlePublishedTime: '',
  articleModifiedTime: '',
  articleSection: '',
  articleTags: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  articlePublishedTime: PropTypes.string, // JSON 8601
  articleModifiedTime: PropTypes.string, // JSON 8601
  articleSection: PropTypes.string,
  articleTags: PropTypes.string,
};

export default SEO;
