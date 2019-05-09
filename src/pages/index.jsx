import React from 'react';

import SEO from '../components/seo';
import { H1 } from '../components/CommonStyled';

import GlobalStyles from '../components/GlobalStyles';

const IndexPage = () => (
  <>
    <GlobalStyles />
    <SEO
      title="Omar Ryhan"
      keywords={['omarryhan', 'omarfryhan', 'omar ryhan']}
    />
    <H1>Omar Ryhan's Public Cyberspace</H1>
  </>
);

export default IndexPage;
