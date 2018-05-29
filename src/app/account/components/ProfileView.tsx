import * as React from 'react';
import { User, ContactType } from '../domain/types';
import InlineEdit from 'app/shared/components/InlineEdit';
import InlineEditContactType from './InlineEditContactType';
import './ProfileView.css';

interface Props {
  user: User;
  onChange: (edit: User) => void;
}

const inputChange = (key: keyof User, onChange: (edit: User) => void, start: User) => (value: string) => {
  onChange({ ...start, [key]: value });
}

const checkChange = (onChange: (edit: User) => void, start: User) => (value: ContactType) => {
  onChange({ ...start, contactType: value })
}

const ProfileView: React.SFC<Props> = (props) => {
  return (
    <div className="ProfileView">
      <h2>My Profile</h2>
      <div>
        <InlineEdit value={props.user.studentName}
          onChange={inputChange('studentName', props.onChange, props.user)}>
          Student Name
          </InlineEdit>
        <InlineEdit value={props.user.parentName}
          onChange={inputChange('parentName', props.onChange, props.user)}>
          Parent Name
          </InlineEdit>
        <InlineEdit value={props.user.contactEmail}
          onChange={inputChange('contactEmail', props.onChange, props.user)}>
          Contact Email
          </InlineEdit>
        <InlineEdit value={props.user.contactPhone}
          onChange={inputChange('contactPhone', props.onChange, props.user)}>
          Contact Phone
          </InlineEdit>
        <InlineEditContactType value={props.user.contactType}
          onChange={checkChange(props.onChange, props.user)} />
      </div>
    </div >
  )
}

export default ProfileView
