import styled from 'styled-components'
import { gridUnitsToRem } from '../../utilities/conversion'

const Stack = styled.div`
  width: 100%;

  > * + * {
    margin-top: ${props => `${gridUnitsToRem(props.stackMultiplier)}`};
  }
`

export { Stack }
