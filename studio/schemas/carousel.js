export default {
	name: 'carousel',
	title: 'Carousel',
	type: 'object',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				{type: 'carouselslide'},
			],
		},
	],
}
