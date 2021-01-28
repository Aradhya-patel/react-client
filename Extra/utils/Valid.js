 import validateEmail from './helper';

 function validCountAndEmail(email,validUser, invalidUser){
            if(validateEmail(email)){
                validUser.push(email);
            }else{
                invalidUser.push(email);
            } 
        }

 function validateUsers(users) {
     let validUser = [];
     let invalidUser = [];
    //  for (let i = 0; i < users.length; i++) { 
    //      // Object Destructuring
    //     const { traineeEmail, reviewerEmail} = users[i];   
    //     function validCountAndEmail(email){
    //         if(validateEmail(email)){
    //             validUser.push(email);
    //         }else{
    //             invalidUser.push(email);
    //         } 
    //     } 
    //     validCountAndEmail(traineeEmail);  
    //     validCountAndEmail(reviewerEmail); 
    //  }
    users.forEach(element => {
        const { traineeEmail, reviewerEmail} =  element;
        validCountAndEmail(traineeEmail, validUser, invalidUser);  
        validCountAndEmail(reviewerEmail, validUser,invalidUser); 
    });

    console.log(" No. Invalid User are "+invalidUser.length + " and  invalidUser are [ "+ invalidUser +" ] ");
    console.log(" No. Valid User are "+ validUser.length + " and validUser are [ "+ validUser+" ]")
 }
  export default validateUsers;