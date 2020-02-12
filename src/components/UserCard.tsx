import React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardType,
  IDocumentCardActivityPerson
} from 'office-ui-fabric-react/lib/DocumentCard';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

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
      <div>
        <Icon iconName="phone" />
        <span>{phone}</span>
      </div>
      <div>
        <Icon iconName="mail" />
        <span>{email}</span>
      </div>
      <div>
        <Icon iconName="room" />
        <span>{office}</span>
      </div>
    </DocumentCardDetails>
  </DocumentCard>;
};