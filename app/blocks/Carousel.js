import { createRef, useEffect } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import { urlFor } from '../utils';

function Carousel({ block }) {
	const carouselRef = createRef();

	useEffect(() => {
		new Swiper(carouselRef.current, {
			modules: [Navigation, Pagination],
			direction: 'horizontal',
			loop: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			width: window && window.innerWidth < 640 ? window.innerWidth - 20 : 580,
			height: 350,
			spaceBetween: 15,
		});
	}, [carouselRef.current]);

    return (
        <section className="Carousel">
			<div className="row om fade-in">
				<div className="column small-12 title-col">
					<h2>{block.title}</h2>

					<div>
						<a aria-label="Previous slide" className="swiper-button-prev btn" href="#"></a>
						<a aria-label="Next slide" className="swiper-button-next btn" href="#"></a>
					</div>
				</div>

				<div className="column small-12">
					<div ref={carouselRef} className="swiper">
						<div className="swiper-wrapper">
							{block.images.map((slide, i) => slide && (
								<div key={`${i}_carousel_img`} className="swiper-slide">
                                    {slide.image && <img src={urlFor(slide.image).width(550).height(350).url()} alt="" />}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
        </section>
    );
}

export default Carousel;
