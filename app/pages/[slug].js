import groq from 'groq'
import client from '../client'
import { useState, useEffect } from 'react';

import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlockRouter from '../components/BlockRouter';
import BookingForm from '../components/BookingForm';

/**
 * Define our page template
 */
function Page({ page, siteSettings }) {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (typeof IntersectionObserver != 'undefined') {
            const observer = new IntersectionObserver((entries, self) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('observed');
                        self.unobserve(entry.target);
                    }
                });
            })

            document.querySelectorAll('.om').forEach(item => {
                observer.observe(item);
            });
        } else {
            document.querySelectorAll('.om').forEach(item => {
                item.classList.add('observed');
            });
        }
    });

	return (
		<>
			<Head page={page} />
			<Header showForm={showForm} setShowForm={setShowForm} />
            { showForm && <BookingForm setShowForm={setShowForm} /> }
			<article>
				{page ? <BlockRouter blocks={page.blocks} /> : <h1>No content</h1>}
			</article>
			<Footer siteSettings={siteSettings} />
		</>
	)
}

/**
 * Gets the paths from sanity to build the pages from
 */
export async function getStaticPaths() {
	const paths = await client.fetch(
		groq`*[_type == "page" && defined(slug.current)][].slug.current`)

	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: true,
	}
}

/**
 * Gets all the data for each page to build them
 */
export async function getStaticProps(context) {
	const { slug = "" } = context.params

	const page = await client.fetch(groq`*[_type == "page" && slug.current == $slug][0]{
		title,
		blocks,
	}`, { slug })

	const siteSettings = await client.fetch(groq`*[_type == "siteSettings"][0]`);

	return {
		props: {
			page,
			siteSettings,
		}
	}
}

export default Page
