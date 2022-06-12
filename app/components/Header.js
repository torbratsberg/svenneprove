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
            setMenuOpen(false);
        } else {
            setMenuOpen(true);
        }
    }

    return (
        <header>
            <div className="row">
                <div className="header-inner column small-12">
                    <div className="left-container">
                        <Link aria-label="Go to front page" href="/" passHref as="/">
                            <img src={Logo.src} alt="Company logo" />
                        </Link>
                    </div>

                    <div className="right-container">
                        { showForm == false ?
                            <>
                                <button ref={menuToggler} onClick={toggleMenu} className="btn menu-toggler" aria-label="Toggle menu">Menu</button>
                                <nav style={menuOpen ? {display: 'block'} : {}}>
                                    {pages && pages?.map(({ title = '', slug = ''}, i) => slug && (
                                        <Link key={i} href="/[slug]" as={`/${slug.current}`}>
                                            <a onClick={() => setMenuOpen(false)} className="underline">{title}</a>
                                        </Link>
                                    ))}
                                    <button className="btn" onClick={() => { setShowForm(true); setMenuOpen(false)}}>Book tid</button>
                                </nav>
                            </>
                        :
                            <button className="btn" onClick={() => { setShowForm(false); setMenuOpen(false); }}>Lukk</button>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
