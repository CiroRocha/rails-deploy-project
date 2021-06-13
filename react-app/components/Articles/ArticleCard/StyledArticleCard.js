import styled from 'styled-components'

import { rgba } from 'polished'

export const StyledArticleCard = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.foreground};
  color: ${({ theme }) => theme.background};
  padding: 30px;
  box-shadow: 0;
  border-radius: 15px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 5px 10px ${({ theme }) => rgba(theme.foreground, 0.3)};
  }

  .article-card-preview-text {
    margin-bottom: 40px;
    text-align: center;
  }

  .article-card-controls button:not(:last-of-type) {
    margin-right: 10px;
  }
`
