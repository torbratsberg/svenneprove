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

			name: 'contactinfo',
			title: 'Contact info',
			type: 'text',
		},
		{
			name: 'socials',
			title: 'Socials',
			type: 'array',
			of: [
				{ type: 'link', }
			]
		},
		{
			name: 'links',
			title: 'Links',
			type: 'array',
			of: [
				{ type: 'link', }
			]
		},
	]
}
