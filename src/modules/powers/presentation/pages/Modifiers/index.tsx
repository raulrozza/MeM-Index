import { FC } from 'react';

import { NavBar } from '@/shared/presentation/components/organisms';

import { List } from './components';
import { Container } from './styles';

const Modifiers: FC = () => (
  <Container>
    <NavBar />

    <main>
      <List />
      {/*

      <Advantage /> */}
    </main>
  </Container>
);

export default Modifiers;