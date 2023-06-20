import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.layout.spacing(3)};
    padding-bottom: ${theme.layout.spacing(3)};
    height: 100%;

    main {
      display: flex;
      align-items: flex-start;
      align-self: center;
      justify-content: center;
      gap: ${theme.layout.spacing(4)};

      height: calc(100% - 100px);

      table {
        width: 100%;
        max-width: ${theme.layout.spacing(99)};
        max-height: 100%;
        flex-grow: 0;
        tbody {
          overflow-y: auto;
        }
      }
    }
  `}
`;
