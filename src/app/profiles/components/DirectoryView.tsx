import * as React from 'react';
import { Profile, ContactType, Permissions } from "domain/types";
import './DirectoryView.css';
import { NavLink } from 'react-router-dom';

interface Props {
  profiles: Profile[];
  permissions: Permissions;
}

const DirectoryView: React.SFC<Props> = ({ profiles, permissions }) => (
  <div className="DirectoryView">
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Preferred Contact</td>
          {permissions === Permissions.ADMIN ? (
            <td>
              Edit
            </td>
          ) : undefined}
        </tr>
      </thead>
      <tbody>
        {profiles.map(profile => {
          console.log(permissions);
          let contactArray = [];
          if (profile.contactType & ContactType.EMAIL) {
            contactArray.push('Email');
          }
          if (profile.contactType & ContactType.CALL) {
            contactArray.push('Call');
          }
          if (profile.contactType & ContactType.TEXT) {
            contactArray.push('Text');
          }
          if (profile.contactType & ContactType.GROUP_TEXT) {
            contactArray.push('Group Text');
          }
          let contactText = contactArray.length ? contactArray.join(', ').replace(/, ([^,]*)$/, ' or $1') : '';
          return (
            <tr key={profile.contactEmail}>
              <td>
                {profile.name}
              </td>
              <td>
                {profile.contactEmail}
              </td>
              <td>
                {profile.contactPhone}
              </td>
              <td>
                {contactText}
              </td>
              {permissions === Permissions.ADMIN ? (
                <td>
                  <NavLink to={`/profile/${profile.email}`}><i className="far fa-edit" /></NavLink>
                </td>
              ) : undefined}
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

export { DirectoryView }
