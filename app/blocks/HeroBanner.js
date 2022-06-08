import { urlFor } from '../utils';
import Link from 'next/link';

function HeroBanner({ block }) {

    return (
        <div className="HeroBanner">
			{block.image && <img src={urlFor(block.image).width(4000)} alt="" />}

			<div className="row">
				<div className="column small-12">
					{block.title && <h1>{block.title}</h1>}
					{block.text && <p>{block.text}</p>}
					{block.link && <Link href={block.link.url}>{block.link.label}</Link>}
				</div>
			</div>
        </div>
    );
}

export default HeroBanner;
