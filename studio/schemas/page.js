export default {
	name: 'page',
	title: 'Page',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'blocks',
			title: 'Blocks',
			type: 'array',
			of: [
				{type: 'herobanner'},
				{type: 'textandimage'},
				{type: 'carousel'},
				{type: 'twocolumntext'},
				{type: 'centeredtext'},
				{type: 'keypoints'},
				{type: 'quotes'},
			],
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		},
	],
}


