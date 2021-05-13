import LogoFullLight from 'images/svg/logo/logo-dark.svg'
import LogoSmallLight from 'images/svg/logo/logo-small-dark.svg'

import { darken, lighten } from 'polished'

export const LightTheme = {
  background: '#FCFCFC',
  foreground: '#0E1013',
  logoFull: LogoFullLight,
  logoSmall: LogoSmallLight,
  green: '#298f22',
  link: {
    common: '#2A519B',
    hover: darken(0.25, '#2A519B'),
  }
}
