const client = require('./client')

module.exports = {
	assetPrefix: '',
	exportPathMap: async function (defaultPathMap) {
		const paths = await client
			.fetch('*[_type == "page" && defined(slug)].slug.current')
			.then(data =>
				data.reduce(
					(acc, slug) => ({
						'/': { page: '/' },
						...acc,
						[`/${slug}`]: { page: '/[slug]', query: { slug } }
					}),
					defaultPathMap
				)
			)
			.catch(console.error)
		return paths
	},
}
