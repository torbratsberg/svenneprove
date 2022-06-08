const sanityClient = require('@sanity/client')

module.exports = sanityClient({
	projectId: 'rx7e3jar',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2021-10-21',
});
