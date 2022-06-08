export default {
	name: 'herobanner',
	title: 'Hero banner',
	type: 'object',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'text',
			title: 'Text',
			type: 'text',
		},
		{
			name: 'link',
			title: 'Link',
			type: 'link',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
		},
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'subtitle',
			text: 'text',
		}
	}
}

