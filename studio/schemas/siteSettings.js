export default {
	name: 'siteSettings',
	title: 'Site Settings',
	type: 'document',
	__experimental_actions: ['update', 'publish'],
	fields: [
		{
			name: 'title',
			title: 'Site Title',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Site Description',
			type: 'text'
		},
		{
			name: 'frontpage',
			title: 'Front page',
			type: 'reference',
			to: { type: 'page' }
		},
		{
			name: 'toptexts',
			title: 'Top texts',
			type: 'array',
			of: [
				{
					name: 'text',
					title: 'Text',
					type: 'text',
				}
			]
		},
		{
			name: 'middletexts',
			title: 'Middle texts',
			type: 'array',
			of: [
				{ type: 'link', }
			]
		},
		{
			name: 'bottomtexts',
			title: 'Bottom texts',
			type: 'array',
			of: [
				{ type: 'link', }
			]
		},
	]
}
