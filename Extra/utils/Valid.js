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
    
 function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(successive.tech)$/;
        return re.test(email);      
 } 

 function validateUsers(users) {
     let validUser = [];
     let invalidUser = [];
     for (let i = 0; i < users.length; i++) { 
         // Object Destructuring
        const { traineeEmail, reviewerEmail} = users[i];   
        function validCountAndEmail(email){
            if(validateEmail(email)){
                validUser.push(email);
            }else{
                invalidUser.push(email);
            } 
        } 
        validCountAndEmail(traineeEmail);  
        validCountAndEmail(reviewerEmail); 
     }

    console.log(" No. Invalid User are "+invalidUser.length + " and  invalidUser are [ "+ invalidUser +" ] ");
    console.log(" No. Valid User are "+ validUser.length + " and validUser are [ "+ validUser+" ]")
 }
 validateUsers(users);