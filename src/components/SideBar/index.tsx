import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion
                name="Luiz Batanero"
                nickname="@luiz.batanero"
              />,
              <FollowSugestion name="Luke Morales" nickname="@luke.morales" />,
              <FollowSugestion
                name="Camila Magalhães"
                nickname="@camila.magalhaes"
              />,
            ]}
          ></List>

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          ></List>

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          ></List>

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          ></List>
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
