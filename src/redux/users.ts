import { Reducer, Action } from 'redux';
import { findIndex } from 'lodash';
import uuid from 'uuid';

import { IUserData } from '@models/IUserData';

const list: IUserData[] = [{
  img: 'http://placekitten.com/200/200',
  name: 'John Dow',
  phone: '12345123456',
  jobTitle: 'javascript developer',
  office: '323B',
  id: '1',
  email: 'somemail@gmail.com'
}, {
  img: 'https://via.placeholder.com/200',
  name: 'Jimi Hendrix',
  phone: '12345123456',
  jobTitle: 'javascript developer',
  office: '323B',
  id: '2',
  email: 'somemail@gmail.com'
}, {
  img: 'http://placekitten.com/200/200',
  name: 'Linus Sebastian',
  phone: '12345123456',
  jobTitle: 'javascript developer',
  office: '323B',
  id: '3',
  email: 'somemail@gmail.com'
}, {
  img: 'http://placekitten.com/200/200',
  name: 'Anna Smith',
  phone: '12345123456',
  jobTitle: 'javascript developer',
  office: '323B',
  id: '4',
  email: 'somemail@gmail.com'
}, {
  img: 'https://via.placeholder.com/200',
  name: 'Zina Ivanova',
  phone: '12345123456',
  jobTitle: 'javascript developer',
  office: '323B',
  id: '5',
  email: 'somemail@gmail.com'
}];

export interface IUsersListState {
  isLoading: boolean;
  list: IUserData[];
}

export enum UsersActionTypes {
  RequestUsersList = 'REQUEST_USERS_LIST',
  ReceiveUsersList = 'RECEIVE_USERS_LIST',
  UpdateUser = 'UPDATE_USER',
  DeleteUser = 'DELETE_USER',
  AddUser = 'ADD_USER'
}

export interface RequestUsersListAction {
  type: UsersActionTypes.RequestUsersList;
}

export interface ReceiveUsersListAction {
  type: UsersActionTypes.ReceiveUsersList;
  payload: IUserData[];
}

export interface UpdateUserAction {
  type: UsersActionTypes.UpdateUser;
  payload: IUserData;
}

export interface DeleteUserAction {
  type: UsersActionTypes.DeleteUser;
  payload: string;
}

export interface AddUserAction {
  type: UsersActionTypes.AddUser;
  payload: IUserData;
}

export type UsersAction =
  RequestUsersListAction |
  ReceiveUsersListAction |
  UpdateUserAction |
  DeleteUserAction |
  AddUserAction;

export const updateUser = (data: IUserData) => (dispatch: Function) => {
  dispatch({
    type: UsersActionTypes.UpdateUser,
    payload: data
  });
};

export const deleteUser = (id: string) => (dispatch: Function) => {
  dispatch({
    type: UsersActionTypes.DeleteUser,
    payload: id
  });
};

export const addUser = (data: IUserData) => (dispatch: Function) => {
  dispatch({
    type: UsersActionTypes.AddUser,
    payload: data
  });
};

export const fetchUsersList = () => async (dispatch: Function) => {
  // Show preloader, request data
  // ...
  // When loaded:
  dispatch({
    type: UsersActionTypes.ReceiveUsersList,
    payload: list
  });
};

const initialState: IUsersListState = {
  list: [],
  isLoading: false
};

const UsersListReducer: Reducer<IUsersListState> = (
  state: IUsersListState = initialState,
  action: Action
): IUsersListState => {
  const { type } = action as UsersAction;

  switch (type) {
    case UsersActionTypes.RequestUsersList:
      return {
        isLoading: true,
        list: []
      };

    case UsersActionTypes.ReceiveUsersList:
      const { payload: usersList } = action as ReceiveUsersListAction;
      return {
        isLoading: false,
        list: usersList
      };

    case UsersActionTypes.UpdateUser: {
      const { payload: user } = action as UpdateUserAction;
      const { list } = state;
      const index: number = findIndex(list, { id: user.id });
      const newList = [...list];
      newList[index] = user;

      return {
        isLoading: false,
        list: newList
      };
    }

    case UsersActionTypes.DeleteUser: {
      const { payload: id } = action as DeleteUserAction;
      const { list } = state;

      return {
        isLoading: false,
        list: list.filter((item) => item.id !== id)
      };
    }

    case UsersActionTypes.AddUser: {
      const { payload: user } = action as AddUserAction;
      const { list } = state;
      return {
        isLoading: false,
        list: [...list, { ...user, id: uuid() }]
      };
    }

    default:
      return state;
  }

};

export default UsersListReducer;