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

import './UserCard.css';

export interface IUserCardProps {
  img: string;
  name: string;
  phone: string;
  jobTitle: string;
  office: string;
  id: string;
  email: string;
}

export const UserCard: React.FunctionComponent<IUserCardProps> = ({
  img, name, phone, jobTitle, office, email
}) => {
  return <DocumentCard type={DocumentCardType.compact}>
    <DocumentCardPreview previewImages={[{ previewImageSrc: img }]} />
    <DocumentCardDetails>
      <DocumentCardTitle
        title={`${name}, ${jobTitle}`}
        shouldTruncate={true}
      />
      <div className="user-card-additional-info">
        <Icon iconName="phone" />
        <span>{phone}</span>
      </div>
      <div className="user-card-additional-info">
        <Icon iconName="mail" />
        <span>{email}</span>
      </div>
      <div className="user-card-additional-info">
        <Icon iconName="room" />
        <span>{office}</span>
      </div>
    </DocumentCardDetails>
    <div className="user-card-controls">
      <IconButton
        iconProps={{ iconName: 'edit' }}
        title="edit"
      />

      <IconButton
        iconProps={{ iconName: 'delete' }}
        title="delete"
      />
    </div>
  </DocumentCard>;
};