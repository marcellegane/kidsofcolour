import styled from 'styled-components'
import { LunaMedia, pxToRem, gridUnitsToRem, Luna } from '../../../Luna';

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
  text-align: center;
`

const MenuItem = styled.li`
  position: relative;

  ${LunaMedia.above('medium')`
    padding: ${gridUnitsToRem(0.125)} ${gridUnitsToRem(0.75)};

    + & {
      padding-left: $sp-s;
    }
  `}

  ${LunaMedia.above('large')`
    + & {
      padding-left: ${gridUnitsToRem(0.25)};
    }
  `}
`

const MenuLink = styled.a`
  display: block;
  font-size: ${pxToRem(24)};
  line-height: ${45/36};
  font-family: ${Luna.font.family.primary};
  text-decoration: none;
  transition: all 0.1s ease;

  ${LunaMedia.above('small')`
    font-size: ${pxToRem(28)};
  `

  ${LunaMedia.above('large')`
    font-size: ${pxToRem(36)};
  `

  :hover,
  :active,
  :focus {
    outline: none;
    transform: scale(0.98) translateZ(0);
  }
`

export { Menu, MenuItem, MenuLink }
