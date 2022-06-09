import Link from 'next/link';
import { urlFor } from '../utils';

function Hero({block}) {

    return (
        <div className="Hero">
			<div className="row">
				<div className="column small-12 medium-6 text-col">
					<h1>{block.title}</h1>
					{block.text && <p>{block.text}</p>}
					{block.link && <Link href={block.link.url}>{block.link.label}</Link>}
				</div>

				<div className="column small-12 medium-6">
					{block.image && <img src={urlFor(block.image).width(570).auto('format').url()} alt="" />}
				</div>
			</div>
        </div>
    );
}

export default Hero;
