import groq from 'groq'
import client from '../client'
import Page from './[slug]';

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

export default Page;
