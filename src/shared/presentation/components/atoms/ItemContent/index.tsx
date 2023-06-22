import React from 'react';

import { Container } from './styles';

const ItemContent: React.FC = ({ children }) => (
  <Container>{children}</Container>
);

export default ItemContent;
