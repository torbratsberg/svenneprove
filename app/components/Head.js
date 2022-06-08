import NextHead from 'next/head';

import { urlFor } from '../utils';

function Head({ page }) {

    return (
		<NextHead>
			<title>Bowlingutstyr for alle | Toms Proshop</title>
			<meta name="robots" content="max-snippet:-1,max-image-preview:standard,max-video-preview:-1" />
			<meta name="description" content="Toms Proshop tilbyr profesjonelt bowlingutstyr for både proffe og amatører. Kom innom oss, eller ta kontakt hvis du trenger hjelp!" />
			<meta property="og:locale" content="nb-NO" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Bowlingutstyr for alle | Toms Proshop" />
			<meta property="og:description" content="Toms Proshop tilbyr profesjonelt bowlingutstyr for både proffe og amatører. Kom innom oss, eller ta kontakt hvis du trenger hjelp!" />
			<meta property="og:url" content="https://elegant-faloodeh-5930b1.netlify.app/" />
			<meta property="og:site_name" content="Toms Proshop" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Bowlingutstyr for alle | Toms Proshop" />
			<meta name="twitter:description" content="Toms Proshop tilbyr profesjonelt bowlingutstyr for både proffe og amatører. Kom innom oss, eller ta kontakt hvis du trenger hjelp!" />
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
