import Link from 'next/link'
import Logo from '../assets/images/logo.svg';

function Footer({ siteSettings }) {
    if (!siteSettings) return <h1 style={{textAlign: 'center'}}>No content</h1>;

    return (
        <footer>
			<div className="top">
				<div className="row">
					<div className="column small-12 large-2 logo-wrapper">
						<Link aria-label="Go to front page" href="/" passHref as="/">
							<img height="62px" width="142px" src={Logo.src} alt="Company logo" />
						</Link>
					</div>

					<div className="column small-12 large-3 contact-info">
                        {siteSettings.contactinfo && <p>{siteSettings.contactinfo}</p>}
					</div>

					<div className="column small-12 large-7 right-wrapper">
                        <a href="#open-booking-form" className="btn large">Book tid</a>

                        <div className="socials-wrapper">
                            {siteSettings?.socials && siteSettings.socials.map((item, i) => item && (
                                <Link key={i} href={item.url}><a aria-label={`Link to ${item.label}`} className="btn"><div className={`icon ${item.label}`}></div></a></Link>
                            ))}
                        </div>
                    </div>
				</div>
			</div>

			<div className="bottom">
				<div className="row">
					<div className="column small-12 flex-between">
						{siteSettings?.links && siteSettings.links.map((item, i) => item && (
							<Link key={i} href={item.url}>{item.label}</Link>
						))}
					</div>
				</div>
			</div>
        </footer>
    );
}

export default Footer;
