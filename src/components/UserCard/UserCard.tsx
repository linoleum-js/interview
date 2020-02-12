import React from 'react';
import {
  DocumentCard,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardType,
} from 'office-ui-fabric-react/lib/DocumentCard';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { IconButton } from 'office-ui-fabric-react';
import { Text } from 'office-ui-fabric-react/lib/Text';


import { IUserData } from '@models/IUserData';

import './UserCard.css';


type IUserCardProps = IUserData & {
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export const UserCard: React.FunctionComponent<IUserCardProps> = ({
  img, name, phone, jobTitle, office, email, onEdit, onDelete, id
}) => {
  return <DocumentCard
    type={DocumentCardType.compact}
  >
    <DocumentCardPreview previewImages={[{ previewImageSrc: img, width: 150 }]} />
    <DocumentCardDetails>
      <DocumentCardTitle
        title={`${name}, ${jobTitle}`}
        shouldTruncate={true}
      />
      <div className="user-card-additional-info">
        <Icon iconName="phone" />
        <Text>{phone}</Text>
      </div>
      <div className="user-card-additional-info">
        <Icon iconName="mail" />
        <Text>{email}</Text>
      </div>
      <div className="user-card-additional-info">
        <Icon iconName="room" />
        <Text>{office}</Text>
      </div>
    </DocumentCardDetails>
    <div className="user-card-controls">
      <IconButton
        iconProps={{ iconName: 'edit' }}
        title="edit"
        onClick={() => onEdit(id)}
      />
      <IconButton
        iconProps={{ iconName: 'delete' }}
        title="delete"
        onClick={() => onDelete(id)}
      />
    </div>
  </DocumentCard>;
};