import { createGlobalStyle } from 'styled-components'
import { Luna, pxToEm, pxToRem } from '../../..'

const GlobalStyle = createGlobalStyle`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}

	@font-face {
		font-family: 'A Love of Thunder';
		src: url('/fonts/a_love_of_thunder-webfont.woff2') format('woff2'),
				url('/fonts/a_love_of_thunder-webfont.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	html {
		font-size: ${pxToEm(Luna.font.size.base)};
	}

	body {
		font-family: ${Luna.font.family.primary};
		font-size: ${pxToRem(Luna.font.size.base)};
		color: ${Luna.color.primary.base};
		background-color: ${Luna.color.light};
	}
`

export { GlobalStyle }
