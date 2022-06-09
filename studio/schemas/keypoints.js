export default {
    name: 'keypoints',
    title: 'Key points',
    type: 'object',
    fields: [
        {
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [
                {
                    name: 'keypoint',
                    title: 'Key point',
                    type: 'object',
                    fields: [
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                        },
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
                    ],
                }
            ],
        },
    ],
    preview: {
        select: {
            media: 'points',
            title: 'points',
        },
        prepare(selection) {
            const {title, media} = selection;
            return {
                media: media[0].image,
                title: title.map(item => item.title).join(', ') + '...',
            }
        }
    }
}
