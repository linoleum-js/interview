import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeIcons } from '@uifabric/icons';
import { Modal } from 'office-ui-fabric-react';
import { find } from 'lodash';

import { UsersList } from './components/UsersList';
import { UserForm } from './components/UserForm/UserForm';
import { IUserData } from './models/IUserData';
import { IAppState } from './redux/store';
import { IUsersListState } from './redux/users';
import { DefaultButton, Stack } from 'office-ui-fabric-react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

import {
  fetchUsersList, updateUser, deleteUser, addUser
} from './redux/users';

initializeIcons();

const dropdownOptions: IDropdownOption[] = [{
  key: 'name_asc', text: 'Name ↓'
}, {
  key: 'name_desc', text: 'Name ↑'
}, {
  key: 'default', text: 'Default'
}];

export const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const usersList: IUsersListState = useSelector((state: IAppState) =>
    state.usersList
  );
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editingItemId, setEditingItemId] = useState<string|null>(null);
  const [sortingOrder, setSortingOrder] = useState<string|number>('default');

  const onEdit = function (id: string) {
    setEditModalOpen(true);
    setEditingItemId(id);
  };

  const onEditSubmit = function (data: IUserData) {
    dispatch(updateUser(data));
    setEditModalOpen(false);
  };

  const onDelete = function (id: string) {
    dispatch(deleteUser(id));
  };

  const onAdd = function () {
    setAddModalOpen(true);
  };

  const onAddSubmit = function (data: IUserData) {
    dispatch(addUser(data));
    setAddModalOpen(false);
  };

  const sortList = function (list: IUserData[]) {
    const listCopy = [...list];
    if (sortingOrder === 'default') {
      return listCopy;
    }
    listCopy.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
    if (sortingOrder === 'name_asc') {
      return listCopy;
    } else {
      return listCopy.reverse();
    }
  };

  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);

  return (
    <div style={{ width: 500, margin: '0 auto' }}>
      <Stack horizontal verticalAlign="center">
        <Stack.Item>
          <Dropdown
            label="Sort users"
            selectedKey={sortingOrder}
            options={dropdownOptions}
            onChange={(event: any, value?: IDropdownOption) => {
              if (!value) {
                setSortingOrder('default');
              } else {
                setSortingOrder(value.key);
              }
            }}
            styles={{ root: { width: 200, marginRight: 20, marginBottom: 20 } }}
          />
        </Stack.Item>
        <Stack.Item styles={{ root: { position: 'relative', top: 4 } }}>
          <DefaultButton
            text="Add user"
            onClick={onAdd}
            iconProps={{ iconName: 'add' }}
          />
        </Stack.Item>
      </Stack>
      <UsersList
        list={sortList(usersList.list)}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <Modal
        isOpen={isAddModalOpen}
        onDismiss={() => setAddModalOpen(false)}
      >
        <UserForm
          onSubmit={onAddSubmit}
          editMode={false}
          onClose={() => setAddModalOpen(false)}
        />
      </Modal>
      
      <Modal
        isOpen={isEditModalOpen}
        onDismiss={() => setEditModalOpen(false)}
      >
        <UserForm
          onSubmit={onEditSubmit}
          editMode={true}
          onClose={() => setEditModalOpen(false)}
          data={find(usersList.list, (item) => item.id === editingItemId)}
        />
      </Modal>
    </div>
  );
};
