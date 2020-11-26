import styled from 'styled-components'
import { gridUnitsToRem, LunaMedia } from '../../../Luna'

const Header = styled.header`
  padding-top: ${gridUnitsToRem()};
  padding-bottom: ${gridUnitsToRem()};

  ${LunaMedia.above('medium')`
    padding-top: ${gridUnitsToRem(2)};
    padding-bottom: ${gridUnitsToRem(2)};
  `}
`

export { Header }
