var  permissions ={
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
    }
}

function hasPermission(moduleName, role, permissionType){
    const result = (Array.isArray(permissions[moduleName][permissionType]) && 
     (permissions[moduleName][permissionType].includes(role)));
    console.log(result);
}
 hasPermission('getUsers', "trainee","delete");