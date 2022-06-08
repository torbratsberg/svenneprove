import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../assets/styles/app.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		document.documentElement.lang = 'nb-NO';
	}, []);

	return <Component {...pageProps} />;
}
