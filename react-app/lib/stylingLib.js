import { lighten, darken } from 'polished'

export const getHover = (theme, color = '#FFFFFF', hoverAmount = 0.25) => {
  if (theme.currentTheme === 'dark') { return lighten(hoverAmount, color) }
  return darken(hoverAmount, color)
}
