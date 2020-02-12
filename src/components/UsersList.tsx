import React from 'react';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';

import { UserCard, IUserData } from './UserCard/UserCard';

export interface IUsersListProps {
  list: IUserData[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const stackTokens: IStackTokens = { childrenGap: 20 };

export const UsersList: React.FunctionComponent<IUsersListProps> = ({
  list, onEdit, onDelete
}) => {
  return <Stack tokens={stackTokens}>
    {list.map((user: IUserData) => {
      return <
        UserCard
          {...user}
          key={user.id}
          onEdit={onEdit}
          onDelete={onDelete}
        />;
    })}
  </Stack>;
};