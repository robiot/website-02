import React from 'react'
import { AppProps } from 'next/app'
import "aos/dist/aos.css";
import '../styles/index.css'


const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default App;