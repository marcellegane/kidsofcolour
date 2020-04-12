import styled from 'styled-components'
import { Layout } from '../../config/layout'
import { pxToRem, gridUnitsToRem } from '../../utilities'

const Container = styled.div`
  max-width: ${pxToRem(Layout.maxWidth)};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${gridUnitsToRem()};
  padding-right: ${gridUnitsToRem()};
`

export { Container }
