import { css } from 'styled-components'
import { Font } from './font'
import { pxToRem } from '../utilities/conversion'

const TextStyles = {
  xxxlarge: {
    size: 40,
    lineHeight: 56,
  },
  xxlarge: {
    size: 32,
    lineHeight: 48,
  },
  xlarge: {
    size: 24,
    lineHeight: 36,
  },
  large: {
    size: 20,
    lineHeight: 32,
  },
  medium: {
    size: 16,
    lineHeight: 24,
  },
  small: {
    size: 12,
    lineHeight: 20,
  },
}

const XXXLarge = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.medium};
  font-size: ${pxToRem(TextStyles.xxxlarge.size)};
  line-height: ${TextStyles.xxxlarge.lineHeight / TextStyles.xxxlarge.size};
`

const XXLarge = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(TextStyles.xxlarge.size)};
  line-height: ${TextStyles.xxlarge.lineHeight / TextStyles.xxlarge.size};
`

const XLarge = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(TextStyles.xlarge.size)};
  line-height: ${TextStyles.xlarge.lineHeight / TextStyles.xlarge.size};
`

const Large = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(TextStyles.large.size)};
  line-height: ${TextStyles.large.lineHeight / TextStyles.large.size};
`

const Medium = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(TextStyles.medium.size)};
  line-height: ${TextStyles.medium.lineHeight / TextStyles.medium.size};
`

const Small = css`
  font-family: ${Font.family.brand};
  font-weight: ${Font.weight.normal};
  font-size: ${pxToRem(TextStyles.small.size)};
  line-height: ${TextStyles.small.lineHeight / TextStyles.small.size};
`

const TextStyle = {
  XXXLarge,
  XXLarge,
  XLarge,
  Large,
  Medium,
  Small,
}

export { TextStyles, TextStyle }
