import {UserActions} from '../const/actions';

export type Action<T = null> = {
    type: UserActions;
    payload?: T;
}
