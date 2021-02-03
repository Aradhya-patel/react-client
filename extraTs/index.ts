import { diamondPattern, equilateralTriangle } from './Pattern/index';
import { hasPermission } from './utils/index';
import validateUsers from './utils/Valid';
import { users } from './constants';

const values = 5;

// if (values => 1 && values <= 10) {
//     // let pattern1 = new Diamond();
//     // let pattern2 = new Equilateral();
//     pattern1.DiamondPattern(values);
//     pattern2.EquilateralTriangle(values);
// } else {
//     console.log("Please enter the value between 2 to 10");
// }

diamondPattern(values);
equilateralTriangle(values);


validateUsers(users);
hasPermission('Users', 'trainer', 'read');
