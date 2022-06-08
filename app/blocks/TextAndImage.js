import Link from 'next/link';

import { urlFor } from '../utils';

function TextAndImage({block}) {
	return (
		<section className="TextAndImage">
			<div className={['row', block.reversed == true ? 'reversed' : ''].join(' ')}>
				<div className="column small-12 medium-10 medium-offset-1">
					<div className="row">
						<div className="column small-12 medium-6">
							{block.title && <h2>{block.title}</h2>}
							{block.text && <p>{block.text}</p>}
							{block.link && <Link href={block.link.url}>{block.link.label}</Link>}
						</div>

						<div className="column small-12 medium-6">
							{block.image && <img src={urlFor(block.image).width(470).url()} alt="" />}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TextAndImage;
