import styled from 'styled-components'
import { lighten } from 'polished'

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;

  a:not(.new-article) {
    margin-left: 8px;
    margin-right: 8px;
  }

  a.new-article {
    background-color: ${({ theme }) => theme.green };
    color: ${({ theme }) => theme.foreground };
    padding: 8px 16px;
    transition: background-color, 0.15s;
    border-radius: 4px;

    &:hover {
      background-color: ${({ theme }) => lighten(0.1, theme.green) };
    }
  }
`
