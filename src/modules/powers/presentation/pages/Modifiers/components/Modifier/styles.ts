import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: ${theme.layout.spacing(57)};

    max-height: 100%;
    overflow: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: ${theme.layout.breakpoints.md}) {
      width: 100%;
    }
  `}
`;
