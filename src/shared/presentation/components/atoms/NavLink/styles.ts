import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ active: boolean }>`
  ${({ theme, active }) => css`
    display: flex;

    background-color: ${active
      ? theme.palette.primary[800]
      : theme.palette.secondary[500]};

    transition: all 0.2s;

    a {
      flex: 1;
      text-align: center;
      padding: ${theme.layout.spacing(0.5, 1)};
      color: ${theme.palette.text.white};
      font-family: ${theme.typography.family.title};
      font-size: ${theme.typography.sizes.title3};
      text-decoration: none;
    }

    &:hover {
      background-color: ${lighten(
        0.05,
        active ? theme.palette.primary[800] : theme.palette.secondary[500],
      )};

      color: ${theme.palette.text.white} !important;
    }
  `}
`;
