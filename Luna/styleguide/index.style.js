import styled from 'styled-components'
import { TextStyle } from '../config/textStyle'
import { Layout } from '../config/layout'
import { pxToRem, gridUnitsToRem } from '../utilities/conversion'
import { Color } from '../config/color'
import { Font } from '../config/font'

const StyleguideTitle = styled.h2`
  ${TextStyle.XXXLarge}
  font-weight: ${Font.weight.bold};
`

const StyleGuide = styled.div`
  padding-top: ${gridUnitsToRem(2)};
  padding-bottom: ${gridUnitsToRem(2)};
  margin-bottom: ${gridUnitsToRem(3)};
`

const XXXLarge = styled.p`
  ${TextStyle.XXXLarge}
`

const XXLarge = styled.p`
  ${TextStyle.XXLarge}
`

const XLarge = styled.p`
  ${TextStyle.Xlarge}
`

const Large = styled.p`
  ${TextStyle.Large}
`

const Medium = styled.p`
  ${TextStyle.Medium}
`

const Small = styled.p`
  ${TextStyle.Small}
`

const ColorSwatchRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${gridUnitsToRem(-0.5)};
  margin-right: ${gridUnitsToRem(-0.5)};
`

const ColorSwatchBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${pxToRem(100)};
  margin: ${gridUnitsToRem(0.5)};
  text-align: center;
`

const ColorSwatch = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${gridUnitsToRem(0.5)};
  background-color: ${props => props.backgroundColor};
  border-width: ${pxToRem(2)};
  border-style: solid;
  border-color: ${props =>
    props.borderColor ? props.borderColor : props.backgroundColor};

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
`

const ColorBlock = styled.div`
  padding: ${gridUnitsToRem()};
  background-color: ${Color.grey.light};

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 40%;
  }
`

export {
  StyleGuide,
  StyleguideTitle,
  XXXLarge,
  XXLarge,
  XLarge,
  Large,
  Medium,
  Small,
  ColorSwatch,
  ColorSwatchRow,
  ColorSwatchBlock,
  ColorBlock,
}
