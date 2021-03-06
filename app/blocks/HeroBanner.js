import { urlFor } from '../utils';
import Link from 'next/link';
import { useEffect, createRef } from 'react';

function HeroBanner({ block }) {
    const holder = createRef();

    useEffect(() => {
        if (!block.words || block.words.length == 0) return;

        holder.current.innerText = block.words[0];

        let i = 0;
        setInterval(() => {
            if (!holder.current) return;

            holder.current.classList.add('fade-out');

            setTimeout(() => {
                if (!holder.current) return;
                holder.current.classList.remove('fade-out');
                holder.current.innerText = block.words[i];
                holder.current.classList.add('fade-in');

                setTimeout(() => {
                if (!holder.current) return;
                    holder.current.classList.remove('fade-in');
                }, 300);
            }, 300);

            if (i == block.words.length - 1) {
                i = 0;
                return;
            }
            i++;
        }, 2500);
    }, [holder.current]);

    return (
        <div className="HeroBanner">
			{block.image && <img src={urlFor(block.image).width(2000).auto('format')} alt="" />}

			<div className="row">
				<div className="column small-8 large-6">
					{block.title && <h1 className="om dash">{block.title}<br /><span ref={holder}></span></h1>}
					{block.text && <p>{block.text}</p>}
					{block.link && <Link href={block.link.url}>{block.link.label}</Link>}
				</div>
			</div>
        </div>
    );
}

export default HeroBanner;
