import HeroBanner from '../blocks/HeroBanner';
import TextAndImage from '../blocks/TextAndImage';
import Carousel from '../blocks/Carousel';
import TwoColumnText from '../blocks/TwoColumnText';
import CenteredText from '../blocks/CenteredText';
import KeyPoints from '../blocks/KeyPoints';
import Quotes from '../blocks/Quotes';

function BlockRouter({ blocks }) {

    return (
        <div id="main">
			{blocks && blocks.map(block => {
				switch (block._type) {
					case 'herobanner':
						return <HeroBanner key={`block-${block._key}`} block={block} />
					case 'textandimage':
						return <TextAndImage key={`block-${block._key}`} block={block} />
					case 'carousel':
						return <Carousel key={`block-${block._key}`} block={block} />
					case 'twocolumntext':
						return <TwoColumnText key={`block-${block._key}`} block={block} />
					case 'centeredtext':
						return <CenteredText key={`block-${block._key}`} block={block} />
					case 'keypoints':
						return <KeyPoints key={`block-${block._key}`} block={block} />
					case 'quotes':
						return <Quotes key={`block-${block._key}`} block={block} />
				}
			})}
        </div>
    );
}

export default BlockRouter;
