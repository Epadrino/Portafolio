import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/GlobalStyles.styled';
import { Dark } from '@/styles/themes/dark';
import { Fonts } from '@/styles/font/Fonts';
import { Ligth } from '@/styles/themes/ligth';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={Dark}>
			<GlobalStyle />
			<Fonts>
				<Component {...pageProps} />
			</Fonts>
		</ThemeProvider>
	);
}
