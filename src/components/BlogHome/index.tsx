import React from 'react';

import SEO from '../Seo';

import GlobalStyles from '../GlobalStyles/index';


const IndexPage: React.FC<{}> = (): JSX.Element => (
  <GlobalStyles>
    <SEO
      title="Omar Ryhan"
      keywords={['omarryhan', 'omarfryhan', 'omar ryhan', 'blog']}
    />
    <h1>Omar Ryhan's Blog</h1>
  </GlobalStyles>
);

export default IndexPage;
