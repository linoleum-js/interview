import React, { useEffect } from 'react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { DefaultButton, PrimaryButton, Stack, IStackItemStyles } from 'office-ui-fabric-react';

import { IUserData } from '../UserCard/UserCard';

import './UserForm.css';

export interface IUserFormProps {
  editMode: boolean;
  data?: IUserData;
  onSubmit: (data: any) => void;
  onClose: () => void;
}

export const UserForm: React.FunctionComponent<IUserFormProps> = ({
  editMode, data, onClose, onSubmit
}) => {
  return <div className="user-form-wrapper">
    <Text variant="large">
      {editMode ? "Edit user" : "Add user"}
    </Text>
    <TextField
      label="Name"
      required
    />
    <TextField
      label="Job title"
      required
    />
    <TextField
      label="Email"
      required
    />
    <MaskedTextField
      label="Phone"
      mask="+9 (999) 999 99 99"
    />
    <TextField
      label="Office"
    />
    <Stack>
      <Stack.Item
        align="end"
        styles={{ root: { paddingTop: 15 } } as IStackItemStyles}
      >
        <DefaultButton text="Close" onClick={onClose} />
        <PrimaryButton text="Submit" onClick={() => onSubmit(data)} />
      </Stack.Item>
    </Stack>
  </div>;
};