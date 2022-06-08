import groq from 'groq'
import client from '../client'
import Head from '../components/Head';

import Logo from '../assets/images/logo.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlockRouter from '../components/BlockRouter';

const Index = ({ page, siteSettings }) => {

	return (
		<>
			<Head page={page} />
			<Header logo={Logo} />
			<article>
				{page ? <BlockRouter blocks={page.blocks} /> : <h1>No content</h1>}
			</article>
			<Footer siteSettings={siteSettings} />
		</>
	);
}

export async function getStaticProps() {
	const pages = await client.fetch(groq`
		*[_type == "page"]|order(publishedAt desc)
	`);

	const siteSettings = await client.fetch(groq`*[_type == "siteSettings"][0]`);

	const page = pages.filter(item => !item.slug)[0];

	return {
		props: {
			page,
			siteSettings,
		}
	}
}

export default Index;
