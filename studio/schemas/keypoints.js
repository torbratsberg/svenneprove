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
}
