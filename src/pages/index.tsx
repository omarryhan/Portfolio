import React from 'react';

import SEO from '../components/Seo';
import { H1 } from '../components/CommonStyled/index';

import GlobalStyles from '../components/GlobalStyles/index';

const IndexPage = (): JSX.Element => (
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
