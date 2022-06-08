import NextHead from 'next/head';

import { urlFor } from '../utils';

function Head({ page }) {
    const title = 'Gjenbruk for en lysere fremtid | RE by ME';
    const desc = 'Book tid hos RE by ME for å realisere drømmen om egensydd kjole, eller å fikse favorittjakka.';

    return (
		<NextHead>
			<title>{ title }</title>
			<meta name="robots" content="max-snippet:-1,max-image-preview:standard,max-video-preview:-1" />
			<meta name="description" content={desc} />
			<meta property="og:locale" content="nb-NO" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={desc} />
			<meta property="og:url" content="https://elegant-faloodeh-5930b1.netlify.app/" />
			<meta property="og:site_name" content="RE by ME" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={desc} />
			{page?.mainImage && 
				<>
					<meta name="twitter:image" content={urlFor(page.mainImage)} />
					<meta name="twitter:image:width" content="731" />
					<meta name="twitter:image:height" content="646" />
					<meta property="og:image" content={urlFor(page.mainImage)} />
					<meta property="og:image:width" content="731" />
					<meta property="og:image:height" content="646" />
				</>
			}
		</NextHead>
    );
}

export default Head;
