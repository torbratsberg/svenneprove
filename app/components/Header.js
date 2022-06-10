import groq from 'groq';
import Link from 'next/link';
import { useState, useEffect, createRef } from 'react';

import client from '../client';
import Logo from '../assets/images/logo.svg';

function Header({ showForm, setShowForm }) {
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

    const toggleMenu = () => {
        if (menuOpen) {
            document.querySelector('header nav').style.display = 'none';
            setMenuOpen(false);
        } else {
            document.querySelector('header nav').style.display = 'block';
            setMenuOpen(true);
        }
    }

    return (
        <header>
            <div className="row">
                <div className="header-inner column small-12">
                    <div className="right-container">
                        <Link aria-label="Go to front page" href="/" passHref as="/">
                            <img height="69px" width="69px" src={Logo.src} alt="Company logo" />
                        </Link>
                    </div>

                    <div className="left-container">
                        { showForm == false ?
                            <>
                                <button ref={menuToggler} onClick={toggleMenu} className="btn menu-toggler" aria-label="Toggle menu">Menu</button>
                                <nav>
                                    {pages && pages?.map(({ title = '', slug = ''}, i) => slug && (
                                        <Link key={i} href="/[slug]" as={`/${slug.current}`}>
                                            <a className="underline">{title}</a>
                                        </Link>
                                    ))}
                                    <button className="btn" onClick={() => setShowForm(true)}>Book tid</button>
                                </nav>
                            </>
                        :
                            <button className="btn" onClick={() => setShowForm(false)}>Lukk</button>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
