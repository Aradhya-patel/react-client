 import {permissions} from '../../Extra/constants';

function hasPermission(moduleName, role, permissionType){
    if(Object.keys(permissions).includes(moduleName)){
        if(permissions[moduleName].all.includes(role)){
            console.log(true);
        }
        else if(Array.isArray(permissions[moduleName][permissionType]) && 
        (permissions[moduleName][permissionType].includes(role))){
            console.log(true);
        }else{
            console.log(false);
        }
    }else{
        console.log(" ModuleName is not present in the given object");
    }
}

export default hasPermission;