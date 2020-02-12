import React from 'react';
import { initializeIcons } from '@uifabric/icons';

import { UsersList, IUsersListProps } from './components/UsersList';
import { IUserData } from './components/UserCard/UserCard';

import {
  ColorClassNames,
  FontClassNames
} from '@uifabric/styling';

initializeIcons();

export const App: React.FunctionComponent = () => {
  const list: IUserData[] = [{
    img: 'http://placekitten.com/200/200',
    name: 'John Dow',
    phone: '123',
    jobTitle: 'javascript developer',
    office: '323B',
    id: '1',
    email: 'somemail@gmail.com'
  }, {
    img: 'http://placekitten.com/200/200',
    name: 'Jimi Hendrix',
    phone: '123',
    jobTitle: 'javascript developer',
    office: '323B',
    id: '2',
    email: 'somemail@gmail.com'
  }, {
    img: 'http://placekitten.com/200/200',
    name: 'Linus Sebastian',
    phone: '123',
    jobTitle: 'javascript developer',
    office: '323B',
    id: '3',
    email: 'somemail@gmail.com'
  }];

  const onEdit = function (id: string) {
    console.log('edit', id);
  };

  const onDelete = function (id: string) {
    console.log('delete', id);
  };

  return (
    <div className={`
        ${ColorClassNames.themePrimary},
        ${FontClassNames.medium}
      `}
    >
      <div className="ms-fontWeight-regular">
        <UsersList
          list={list}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};
