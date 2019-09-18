import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SEO from '../components/Seo';
import MeCircleImg from '../components/Images/MeCircle';

import GlobalStyles from '../components/GlobalStyles/index';

import GithubLogo from '../images/icons/github-black-round.svg';
import MailLogo from '../images/icons/mail-black-round.svg';
import LinkedInLogo from '../images/icons/linkedin-black-round.svg';
import KeybaseLogo from '../images/icons/keybase-black-borderless.svg';
import BlogLogo from '../images/icons/blog-black-borderless.svg';

import { COLOR_PALETTE, media } from '../constants';


const ProfileImageWrapperDiv = styled.div`
  width: 300px;
  max-width: 60vw;
  margin: 0 auto;
  margin-top: 10vh;

  padding: 4px;

  border-radius: 50%;
  -webkit-box-shadow: 6px 6px 23px -9px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 6px 23px -9px rgba(0,0,0,0.75);
  box-shadow: 6px 6px 23px -2px rgba(0,0,0,0.75);
  
  background-color: ${COLOR_PALETTE.blue.lightAlt};
`;

const NameH1 = styled.h1`

  //font-size: calc(3em + 2vw);
  font-size: 6em;

  ${media.lessThan('mobileXLarge')`
    font-size: 4em;
  `};

  ${media.lessThan('mobileSmall')`
    font-size: 3.5em;
  `};

  margin: 5vh 0;
  text-align: center;

  font-family: 'Swanky and Moo Moo', cursive;
`;

const ProfileLinksWrapperDiv = styled.div`
  display: flex;

  width: 600px;
  max-width: 95vw;

  margin: 0 auto;

  justify-content: space-evenly;
  align-items: center;
`;

const ProfileLinkDiv = styled.div`
  width: 12vw;
  min-width: 50px;
  max-width: 100px;
  padding: 0.5%;

  border-radius: 10px;
  margin: 0 1vw;

  &:hover {
    background-color: ${COLOR_PALETTE.blue.lightAlt};
  }
`;

const IndexPage: React.FC<{}> = (): JSX.Element => (
  <GlobalStyles>
    <SEO
      title="Omar Ryhan"
      keywords={['omarryhan', 'omarfryhan', 'omar ryhan']}
    />
    <main>

      <ProfileImageWrapperDiv>
        <MeCircleImg />
      </ProfileImageWrapperDiv>

      <NameH1> Omar Ryhan </NameH1>

      <ProfileLinksWrapperDiv>

        <ProfileLinkDiv>
          <a href="mailto:omarryhan@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={MailLogo} alt="Mail logo" key="Mail" title="Send me an email" width="100%" />
          </a>
        </ProfileLinkDiv>
        <ProfileLinkDiv>
          <a href="https://github.com/omarryhan" target="_blank" rel="noopener noreferrer">
            <img src={GithubLogo} alt="Github logo" key="Github" title="Github" width="100%" />
          </a>
        </ProfileLinkDiv>
        <ProfileLinkDiv>
          <a href="https://keybase.io/omarryhan" target="_blank" rel="noopener noreferrer">
            <img src={KeybaseLogo} alt="Keybase.io logo" key="Keybase" title="Keybase" width="100%" />
          </a>
        </ProfileLinkDiv>
        <ProfileLinkDiv>
          <a href="https://linkedin.com/in/omarryhan" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInLogo} alt="LinkedIn logo" key="LinkedIn" title="LinkedIn" width="100%" />
          </a>
        </ProfileLinkDiv>
        <ProfileLinkDiv>
          <Link to="/blog">
            <img src={BlogLogo} alt="Blog logo" key="Blog" title="Read my blog" width="100%" />
          </Link>
        </ProfileLinkDiv>

      </ProfileLinksWrapperDiv>
    </main>
  </GlobalStyles>
);

export default IndexPage;
