import { permissions } from '../constants';

export function hasPermission(moduleName?: string, role?: string, permissionType?: string) {
    if (Object.keys(permissions).includes(moduleName)) {
        if (permissions[moduleName].all.includes(role)) {
            console.log(true);
        }
        else if (Array.isArray(permissions[moduleName][permissionType]) &&
            (permissions[moduleName][permissionType].includes(role))) {
            console.log(true);
        } else {
            console.log(false);
        }
    } else {
        console.log('ModuleName is not present in the given object');
    }
}




