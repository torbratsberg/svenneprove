import groq from 'groq'
import client from '../client'
import { useState, useEffect } from 'react';

import Logo from '../assets/images/logo.svg';
import Head from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlockRouter from '../components/BlockRouter';
import BookingForm from '../components/BookingForm';

const Index = ({ page, siteSettings }) => {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
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
    });

	return (
		<>
			<Head page={page} />
			<Header logo={Logo} showForm={showForm} setShowForm={setShowForm} />
            { showForm && <BookingForm setShowForm={setShowForm} /> }
			<article>
				{page ? <BlockRouter blocks={page.blocks} /> : <h1>No content</h1>}
			</article>
			<Footer siteSettings={siteSettings} />
            <script type="text/javascript" src="/public/scripts/om.js"></script>
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
