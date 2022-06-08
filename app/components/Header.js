import groq from 'groq';
import Link from 'next/link';
import { useState, useEffect, createRef } from 'react';

import client from '../client';

function Header(props) {
	const [pages, setPages] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const menuToggler = createRef();

	useEffect(() => {
		client.fetch(groq`*[_type == "page"] {
			title,
			slug,
		}`).then((res) => {
			setPages(res);
		});
	}, []);

	useEffect(() => {
		if (!menuToggler.current) return;

		menuToggler.current.addEventListener('click', () => {
			if (menuOpen) {
				document.querySelector('header nav')?.style.display = 'none';
				setMenuOpen(false);
			} else {
				document.querySelector('header nav')?.style.display = 'block';
				setMenuOpen(true);
			}
		});
	}, [menuToggler.current]);

    return (
        <header>
			<div className="row">
				<div className="header-inner column small-12">
					<div className="right-container">
						<Link aria-label="Go to front page" href="/" passHref as="/">
							<img height="63px" width="63px" src={props.logo.src} alt="Company logo" />
						</Link>
					</div>

					<div className="left-container">
                        { props.showForm == false ?
                            <>
                                <button ref={menuToggler} className="btn menu-toggler" aria-label="Toggle menu">Menu</button>
                                <nav>
                                    {pages && pages?.map(({ title = '', slug = ''}, i) => slug && (
                                        <Link key={i} href="/[slug]" as={`/${slug.current}`}>
                                            <a className="underline">{title}</a>
                                        </Link>
                                    ))}
                                    <button className="btn" onClick={() => props.setShowForm(true)}>Book tid</button>
                                </nav>
                            </>
                        :
                            <button className="btn" onClick={() => props.setShowForm(false)}>Lukk</button>
                        }
					</div>
				</div>
			</div>
        </header>
    );
}

export default Header;
