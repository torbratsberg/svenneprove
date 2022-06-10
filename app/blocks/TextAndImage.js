import Link from 'next/link';

import { urlFor } from '../utils';

function TextAndImage({block}) {
	return (
		<section className="TextAndImage">
			<div className={['row', block.reversed == true ? 'reversed' : ''].join(' ')}>
				<div className="column small-12">
					<div className="row">
						<div className={`column small-12 medium-6 om fade-${block.reversed ? 'left' : 'right'}`}>
							{block.title && <h2 className="om dash">{block.title}</h2>}
							{block.text && <p>{block.text}</p>}
							{block.link && <Link href={block.link.url}><a className="btn">{block.link.label}</a></Link>}
						</div>

						<div className={`column small-12 medium-6 om fade-${block.reversed ? 'right' : 'left'}`}>
							{block.image && <img src={urlFor(block.image).width(640).auto('format').url()} alt="" />}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TextAndImage;
