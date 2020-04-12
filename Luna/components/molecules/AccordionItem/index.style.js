import styled from 'styled-components'
import { Luna, pxToRem, gridUnitsToRem } from '../../..'

const AccordionItem = styled.div`
  & + & {
    margin-top: ${gridUnitsToRem(1.5)};
  }
`

const AccordionItemHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: ${gridUnitsToRem()};
  padding-right: ${gridUnitsToRem(0.5)};
  padding-bottom: ${gridUnitsToRem()};
  padding-left: 0;
  border: none;
  border-bottom: ${pxToRem(1)} solid ${Luna.color.primary.base};
  background: transparent;

  :hover,
  :focus,
  :active {
    outline: none;
    cursor: pointer;
    color: ${Luna.color.primary.base};
  }

  color: ${Luna.color.primary.base};
`

const AccordionItemLabel = styled.div`
  margin-right: ${gridUnitsToRem()};
  ${Luna.TextStyle.Large}
  color: currentColor;
  transition: color 0.3s ease;
`

const AccordionItemIcon = styled.div`
  transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  transition: transform 0.3s ease;
`

const AccordionItemMain = styled.div`
  display: none;
  overflow: hidden;
`

const AccordionItemContent = styled.div`
  padding-top: ${gridUnitsToRem()};
  opacity: 0;
`

export {
  AccordionItem,
  AccordionItemHeader,
  AccordionItemLabel,
  AccordionItemIcon,
  AccordionItemMain,
  AccordionItemContent,
}
