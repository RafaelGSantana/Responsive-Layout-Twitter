import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  EditButton,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Rafael Santana</h1>
        <h2>@rafael_gs</h2>
        <p>
          Developer at <a href="rocketseat.com.br">Empresa Pica</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brazil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 19 de abril de 1990
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>33</strong>
          </span>
          <span>
            <strong>33 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
