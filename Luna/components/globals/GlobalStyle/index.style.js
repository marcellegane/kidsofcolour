import { createGlobalStyle } from 'styled-components'
import { Luna, pxToEm, pxToRem } from '../../..'

const GlobalStyle = createGlobalStyle`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}

	html {
		font-size: ${pxToEm(Luna.font.size.base)};
	}

	body {
		font-family: ${Luna.font.family.brand};
		font-size: ${pxToRem(Luna.font.size.base)};
		color: ${Luna.color.primary.base};
		background-color: ${Luna.color.light};
	}
`

export { GlobalStyle }
