import LogoFullDark from 'images/svg/logo/logo-light.svg'
import LogoSmallDark from 'images/svg/logo/logo-small-light.svg'

import { darken, lighten } from 'polished'

export const DarkTheme = {
  background: '#0E1013',
  foreground: '#FCFCFC',
  logoFull: LogoFullDark,
  logoSmall: LogoSmallDark,
  green: '#298f22',
  link: {
    common: '#469CDA',
    hover: lighten(0.25, '#469CDA'),
  }
}
