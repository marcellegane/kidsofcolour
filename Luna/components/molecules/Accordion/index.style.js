import styled from 'styled-components'
import { Luna, gridUnitsToRem } from '../../..'

const Accordion = styled.div``

const AccordionTitle = styled.h3`
  ${Luna.TextStyle.Large}
  color: ${Luna.color.primary.base};
  font-weight: ${Luna.font.weight.bold};

  + ${Accordion} {
    margin-top: ${gridUnitsToRem(1.5)};
  }
`

export { Accordion, AccordionTitle }
