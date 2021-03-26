import {Action} from '../types/action';
import {User} from '../models/user';
import {UserActions} from '../const/actions';

const getAll = (): Action => ({type: UserActions.LIST});
const create = (): Action<User> => ({type: UserActions.CREATE});

export const UserAction = {
    getAll,
    create
};
