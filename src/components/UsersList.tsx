import React from 'react';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';

import { UserCard, IUserCardProps } from './UserCard/UserCard';

export interface IUsersListProps {
  list: IUserCardProps[];
}

const stackTokens: IStackTokens = { childrenGap: 20 };

export const UsersList: React.FunctionComponent<IUsersListProps> = ({ list }) => {
  return <Stack tokens={stackTokens}>
    {list.map((user: IUserCardProps) => {
      return <UserCard {...user} key={user.id} />;
    })}
  </Stack>;
};