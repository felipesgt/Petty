import React from 'react';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

import {
  Block,
  Container,
  Logo,
  Icons,
} from './styles';

const Footer = () => (
  <Container>
    <Block><Logo>Petty</Logo></Block>
    <Block><p>© Copyright 2020 felipesgt. All rights reserved.</p></Block>
    <Block>
      <a href="http://www.github.com/felipesgt">
        {' '}
        <Icons src={github} />
      </a>
      <Icons src={linkedin} />
    </Block>
  </Container>
);

export default Footer;
