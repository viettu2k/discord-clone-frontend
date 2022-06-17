const DUMMY_MESSAGES = [{
        _id: 1,
        content: 'hello',
        sameAuthor: true,
        author: { username: 'Johnny' },
        date: '22/01/2022',
        sameDay: false,
    },
    {
        _id: 2,
        content: 'hello once again',
        author: { username: 'Johnny' },
        sameAuthor: false,
        date: '22/01/2022',
        sameDay: true,
    },
];

export default DUMMY_MESSAGES;