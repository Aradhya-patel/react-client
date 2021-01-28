import {DiamondPattern, EquilateralTriangle} from './Pattern/index';
import hasPermission from './utils/index';
import validateUsers from './utils/Valid';
import {users} from '../Extra/constants';

const values =   process.argv[2];

if( values > 1 && values <= 10){ 
    DiamondPattern(values);
    EquilateralTriangle(values);
}else{
   console.log("Please enter the value between 2 to 10");
}


 validateUsers(users);
 hasPermission('Users', "trainer","read");
