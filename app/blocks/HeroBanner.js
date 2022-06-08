import { urlFor } from '../utils';
import Link from 'next/link';
import { useEffect, useState, createRef } from 'react';

function HeroBanner({ block }) {
    const words = ['Gjenbruk', 'bærekraft', 'mote'];
    const holder = createRef();

    useEffect(() => {
        holder.current.innerText = words[0];

        let i = 0;
        setInterval(() => {
            if (!holder.current) return;

            holder.current.classList.add('fade-out');

            setTimeout(() => {
                if (!holder.current) return;
                holder.current.classList.remove('fade-out');
                holder.current.innerText = words[i];
                holder.current.classList.add('fade-in');

                setTimeout(() => {
                if (!holder.current) return;
                    holder.current.classList.remove('fade-in');
                }, 300);
            }, 300);

            if (i == words.length - 1) i = 0;
            i++;
        }, 3000);
    }, [holder.current]);

    return (
        <div className="HeroBanner">
			{block.image && <img src={urlFor(block.image).width(4000)} alt="" />}

			<div className="row">
				<div className="column small-12 medium-8 large-5">
					{block.title && <h1 className="om dash">{block.title} <span ref={holder}></span></h1>}
					{block.text && <p>{block.text}</p>}
					{block.link && <Link href={block.link.url}>{block.link.label}</Link>}
				</div>
			</div>
        </div>
    );
}

export default HeroBanner;
