import React, { useEffect, useState } from 'react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { DefaultButton, PrimaryButton, Stack, IStackItemStyles } from 'office-ui-fabric-react';
import { isEmpty } from 'lodash';

import { IUserData } from '../UserCard/UserCard';

import './UserForm.css';

export interface IUserFormProps {
  editMode: boolean;
  data?: IUserData;
  onSubmit: (data: any) => void;
  onClose: () => void;
}

export const UserForm: React.FunctionComponent<IUserFormProps> = ({
  editMode, data = {} as IUserData, onClose, onSubmit
}) => {
  const [localData, setLocalData] = useState({ ...data });
  const [validationErrors, setValidationErrors] = useState<any>({})

  const validatePhone = function(phone?: string): boolean {
    if (!phone) {
      return false;
    }
    return phone.length === 11;
  };

  const validatEmail = function(email?: string): boolean {
    if (!email) {
      return false;
    }
    return !!email.match(/^[^@]+@[^@]+\.[^@]+$/);
  };

  const validateName = function(name?: string):boolean {
    return !!name;
  };

  const validateJobTitle = function(jobTitle?: string):boolean {
    return !!jobTitle;
  };

  const getValidationErrors = function() {
    const errors = {} as any;
    const { email, phone, name, jobTitle } = localData;
    if (!validatEmail(email)) {
      errors.email = 'Invalid email';
    }
    if (!validatePhone(phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (!validateName(name)) {
      errors.name = 'Name is required';
    }
    if (!validateJobTitle(jobTitle)) {
      errors.jobTitle = 'Job title is required';
    }
    return errors;
  };

  const handleSubmit = function () {
    const errors = getValidationErrors();
    setValidationErrors(errors);
    if (!isEmpty(errors)) {
      return;
    }
    onSubmit(localData);
  };

  const onInputChange = function (event: any, value?: string) {
    const name: string = event.target.name;
    if (name === 'phone' && value) {
      value = value.replace(/\D/g, '');
    }
    const partialData: Partial<IUserData> = {
      [name]: value
    };
    setLocalData({ ...localData, ...partialData });
  }

  return <div className="user-form-wrapper">
    <Text variant="large">
      {editMode ? "Edit user" : "Add user"}
    </Text>
    <TextField
      label="Name"
      required
      value={localData.name}
      errorMessage={validationErrors.name}
      name="name"
      onChange={onInputChange}
    />
    <TextField
      label="Job title"
      required
      value={localData.jobTitle}
      errorMessage={validationErrors.jobTitle}
      name="jobTitle"
      onChange={onInputChange}
    />
    <TextField
      label="Email"
      required
      value={localData.email}
      errorMessage={validationErrors.email}
      name="email"
      onChange={onInputChange}
    />
    <MaskedTextField
      label="Phone"
      mask="+9 (999) 999 99 99"
      value={localData.phone}
      errorMessage={validationErrors.phone}
      name="phone"
      onChange={onInputChange}
    />
    <TextField
      label="Office"
      value={localData.office}
      name="office"
      onChange={onInputChange}
    />
    <Stack>
      <Stack.Item
        align="end"
        styles={{ root: { paddingTop: 15 } } as IStackItemStyles}
      >
        <DefaultButton text="Close" onClick={onClose} />
        <PrimaryButton text="Submit" onClick={handleSubmit} />
      </Stack.Item>
    </Stack>
  </div>;
};