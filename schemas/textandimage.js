export default {
	name: 'textandimage',
	title: 'Text and image',
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
			name: 'image',
			title: 'Image',
			type: 'image',
		},
		{
			name: 'link',
			title: 'Link',
			type: 'link',
		},
		{
			name: 'reversed',
			title: 'Reversed',
			type: 'boolean',
		},
	],
}
