import {Action} from '../types/action';
import {UserActions} from '../const/actions';
import {User} from '../models/user';

const initialState = {
    modalOpen: false,
}

export const UserReducer = (state = initialState, action: Action<User | null>) => {

    switch (action.type) {
        case UserActions.LIST:
            return {
                ...state,
                modalOpen: true
            }

        default:
            return state;
    }


}
