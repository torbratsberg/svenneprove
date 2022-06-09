export default {
	name: 'quotes',
	title: 'Quotes',
	type: 'object',
	fields: [
		{
			name: 'quotes',
			title: 'Quotes',
			type: 'array',
            of: [
                {
                    name: 'quote',
                    title: 'Quote',
                    type: 'object',
                    fields: [
                        {
                            name: 'quote',
                            title: 'Quote',
                            type: 'string',
                        },
                        {
                            name: 'author',
                            title: 'Author',
                            type: 'string',
                        },
                    ],
                }
            ],
		},
	],
    preview: {
        select: {
            title: 'quotes',
        },
        prepare(selection) {
            console.log(selection);
            const {title} = selection
            return {
                title: title.map(item => item.quote.slice(0, 15)).join('... | ') + '...',
                subtitle: title.map(item => item.author.split(' ')[0]).join('... | ') + '...',
            }
        }
    }
}
