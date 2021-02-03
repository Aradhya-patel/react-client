import validateEmail from './helper';


function validCountAndEmail(email, validUser, invalidUser) {
    if (validateEmail(email)) {
        validUser.push(email);
    } else {
        invalidUser.push(email);
    }
}

function validateUsers(users) {
    const validUser = [];
    const invalidUser = [];
    users.forEach(element => {
        const { traineeEmail, reviewerEmail } = element;
        validCountAndEmail(traineeEmail, validUser, invalidUser);
        validCountAndEmail(reviewerEmail, validUser, invalidUser);
    });

    console.log(' No. Invalid User are ' + invalidUser.length + ' and  invalidUser are [ ' + invalidUser + ' ] ');
    console.log(' No. Valid User are ' + validUser.length + ' and validUser are [ ' + validUser + ' ]');
    // return (`Invalid User ${invalidUser} and count is ${invalidUser.length} Valid User ${invalidUser} and count is ${invalidUser.length}`)
}
export default validateUsers;