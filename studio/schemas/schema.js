// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import link from './link';
import page from './page';
import hero from './hero';
import herobanner from './herobanner';
import textandimage from './textandimage';
import carousel from './carousel';
import carouselslide from './carouselslide';
import twocolumntext from './twocolumntext';
import siteSettings from './siteSettings'
import centeredText from './centeredtext';
import keypoints from './keypoints';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		link,
		page,
		hero,
		herobanner,
		textandimage,
		carousel,
		carouselslide,
		twocolumntext,
        centeredText,
        keypoints,
		siteSettings,
	]),
});
