let  permissions ={
    'Users': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
    }
}

let users = [
    {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech'
    },
    {
        traineeEmail: 'trainee2@gmail.com',
        reviewerEmail: 'reviewer2@successive.tech',
    }
]

export {permissions,users};