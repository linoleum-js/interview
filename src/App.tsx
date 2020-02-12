import React from 'react';
import { initializeIcons } from '@uifabric/icons';

import { UsersList, IUsersListProps } from './components/UsersList';
import { IUserCardProps } from './components/UserCard';

initializeIcons();

export const App: React.FunctionComponent = () => {
  const list: IUserCardProps[] = [{
    img: 'http://placekitten.com/200/200',
    name: 'John Dow',
    phone: '123',
    jobTitle: 'dev',
    office: '323B',
    id: '1',
    email: 'somemail@gmail.com'
  }, {
    img: 'http://placekitten.com/200/200',
    name: 'Jimi Hendrix',
    phone: '123',
    jobTitle: 'dev',
    office: '323B',
    id: '2',
    email: 'somemail@gmail.com'
  }, {
    img: 'http://placekitten.com/200/200',
    name: 'Linus Sebastian',
    phone: '123',
    jobTitle: 'dev',
    office: '323B',
    id: '3',
    email: 'somemail@gmail.com'
  }];

  return (
    <div className="ms-Fabric">
      <div className="ms-font-su ms-fontColor-themePrimary">
        <UsersList list={list} />
      </div>
    </div>
  );
};
