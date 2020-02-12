import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeIcons } from '@uifabric/icons';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { Modal } from 'office-ui-fabric-react';


import { UsersList, IUsersListProps } from './components/UsersList';
import { UserForm } from './components/UserForm/UserForm';
import { IUserData } from './components/UserCard/UserCard';
import { IAppState } from './redux/store';
import { IUsersListState } from './redux/users';
import {
  fetchUsersList, updateUser, deleteUser, addUser
} from './redux/users';

initializeIcons();

export const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const usersList: IUsersListState = useSelector((state: IAppState) =>
    state.usersList
  );
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editingItemId, setEditingItemId] = useState<string|null>(null);

  const onEdit = function (id: string) {
    setEditModalOpen(true);
    setEditingItemId(id);

  };

  const onDelete = function (id: string) {
    dispatch(deleteUser(id));
  };

  const onAdd = function () {
    setAddModalOpen(true);
  };

  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);

  return (
    <div>
      <CommandBar
        items={[{
          key: 'addUser',
          text: 'Add user',
          iconProps: { iconName: 'Add' },
          onClick: onAdd
        }]}
      />
      <UsersList
        list={usersList.list}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <Modal
        isOpen={isAddModalOpen}
        onDismiss={() => setAddModalOpen(false)}
      >
        <UserForm
          onSubmit={() => { console.log('submit add'); }}
          editMode={false}
          onClose={() => setAddModalOpen(false)}
        />
      </Modal>
      
      <Modal
        isOpen={isEditModalOpen}
        onDismiss={() => setEditModalOpen(false)}
      >
        <UserForm
          onSubmit={() => { console.log('submit edit'); }}
          editMode={true}
          onClose={() => setEditModalOpen(false)}
        />
      </Modal>
    </div>
  );
};
