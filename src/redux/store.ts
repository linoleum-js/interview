import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import UsersListReducer, { IUsersListState } from './users';
// import { IUserData } from '../components/UserCard/UserCard';

export interface IAppState {
  usersList: IUsersListState
}

const store = createStore(
  combineReducers<IAppState>({
    usersList: UsersListReducer
  }),
  compose(
    applyMiddleware(thunk)
  )
);

export default store;