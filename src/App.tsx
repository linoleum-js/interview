import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeIcons } from '@uifabric/icons';

import { UsersList, IUsersListProps } from './components/UsersList';
import { IUserData } from './components/UserCard/UserCard';
import { IAppState } from './redux/store';
import { IUsersListState } from './redux/users';
import {
  fetchUsersList, updateUser, deleteUser, addUser
} from './redux/users';

import {
  ColorClassNames,
  FontClassNames
} from '@uifabric/styling';

initializeIcons();

export const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const usersList: IUsersListState = useSelector((state: IAppState) =>
    state.usersList
  );
  

  const onEdit = function (id: string) {
    console.log('edit', id);
  };

  const onDelete = function (id: string) {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);

  return (
    <div
      // className={`
      //   ${ColorClassNames.themePrimary},
      //   ${FontClassNames.medium}
      // `}
    >
      <div className="ms-fontWeight-regular">
        <UsersList
          list={usersList.list}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};
