import * as React from 'react';
import InlineEdit from 'app/shared/components/InlineEdit';
import { Profile, ContactType } from 'domain/types';
import InlineEditContactType from './InlineEditContactType';
import './ProfileView.css';

interface Props {
  profile: Profile;
  email: string;
  onChange: (email: string, edit: Profile) => void;
}

const ProfileView: React.SFC<Props> = (props) => {
  const inputChange = (key: keyof Profile) => (value: string) => {
    props.onChange(props.email, { ...props.profile, [key]: value });
  }

  const checkChange = (value: ContactType) => {
    props.onChange(props.email, { ...props.profile, contactType: value });
  }

  return (
    <div className="ProfileView">
      <h2>My Profile</h2>
      <div>
        <InlineEdit value={props.profile.name}
          onChange={inputChange('name')}>
          Student Name
          </InlineEdit>
        <InlineEdit value={props.profile.parentName}
          onChange={inputChange('parentName')}>
          Parent Name
          </InlineEdit>
        <InlineEdit value={props.profile.contactEmail}
          onChange={inputChange('contactEmail')}>
          Contact Email
          </InlineEdit>
        <InlineEdit value={props.profile.contactPhone}
          onChange={inputChange('contactPhone')}>
          Contact Phone
          </InlineEdit>
        <InlineEditContactType value={props.profile.contactType}
          onChange={checkChange} />
      </div>
    </div >
  )
}

export default ProfileView
