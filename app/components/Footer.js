import Link from 'next/link'
import Logo from '../assets/images/logo.svg';

function Footer({ siteSettings }) {

    return (
        <footer className="om">
			<div className="top">
				<div className="row">
					<div className="column small-12 large-3 logo-wrapper">
						<Link aria-label="Go to front page" href="/" passHref as="/">
							<img height="62px" width="142px" src={Logo.src} alt="Company logo" />
						</Link>
					</div>

					<div className="column small-12 large-6 flex-center top-texts-wrapper">
						{siteSettings?.toptexts && siteSettings.toptexts.map((item, i) => item && (
							<p key={i}>{item}</p>
						))}
					</div>

					<div className="column small-12 large-3">
					</div>
				</div>
			</div>

			<div className="middle">
				<div className="row">
					<div className="column small-12 flex-center">
						{siteSettings?.middletexts && siteSettings.middletexts.map((item, i) => item && (
							<Link key={i} href={item.url}>{item.label}</Link>
						))}
					</div>
				</div>
			</div>

			<div className="bottom">
				<div className="row">
					<div className="column small-12 flex-between">
						{siteSettings?.bottomtexts && siteSettings.bottomtexts.map((item, i) => item && (
							<Link key={i} href={item.url}>{item.label}</Link>
						))}
					</div>
				</div>
			</div>
        </footer>
    );
}

export default Footer;
