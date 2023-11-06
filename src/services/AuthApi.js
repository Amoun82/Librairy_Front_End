import { getItem, removeItem } from '../services/localeStorage';

export function hasAuthenticated() {
    const token = getItem('Token');
    const resultToken = token ? true : false;

    if (false === resultToken) {
        removeItem('Token');
    }

    return resultToken;
}

export function logout() {
    removeItem('Token');
    removeItem('Roles');
    removeItem('Id');
}

export function HasRoles() {
    const Roles = getItem('Roles');
    const resultRoles = Roles ? true : false;

    if (false === resultRoles) {
        removeItem('Roles');
    }

    return Roles;
}

export function HasId(){
    const Id = getItem('Id');
    const resultId = Id ? true : false;

    if (false === resultId) {
        removeItem('Id');
    }

    return Id;
}