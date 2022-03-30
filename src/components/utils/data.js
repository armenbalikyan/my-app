export const mainData = [
    {
        name: 'Joe',
        lastname: 'Smith',
        age: 46,
        country: 'France'
    },
    {
        name: 'Karen',
        lastname: 'Smith',
        age: 18,
        country: 'Spain'
    },
    {
        name: 'Valod',
        lastname: 'Karagulyan',
        age: 5,
        country: 'Armenia'
    },
    {
        name: 'John',
        lastname: 'Aous',
        age: 78,
        country: 'USA'
    }, {
        name: 'Seroj',
        lastname: 'Frangulyan',
        age: 99,
        country: 'Hervashen'
    }
]
export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Lastname',
        dataIndex: 'lastname',
        sorter: {
            compare: (a, b) => a.lastname < b.lastname ? 1 : -1,
            multiple: 3,
        },
    },
    {
        title: 'Age',
        dataIndex: 'age',
        sorter: {
            compare: (a, b) => a.age - b.age,
            multiple: 2,
        },
    },
    {
        title: 'Country',
        dataIndex: 'country',
        sorter: {
            compare: (a, b) => a.country < b.country ? 1 : -1,
            multiple: 1,
        },
    },
];