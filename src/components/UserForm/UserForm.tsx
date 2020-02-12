import React, { useEffect } from 'react';
import { IUserData } from '../UserCard/UserCard';

export interface IUserFormProps {
  editMode: boolean;
  data: IUserData;
  onSubmit: () => void;
  onClose: () => void;
}

export const UserForm: React.FunctionComponent<IUserFormProps> = ({
  editMode, data
}) => {
  return <div>

  </div>;
};