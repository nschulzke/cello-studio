import { getProfile } from './getProfile';

export const profiles = {
  get: (userIndex, email) => getProfile(userIndex[email]),

  update: (userIndex, email, profile) => ({
    ...userIndex,
    [email]: {
      ...(userIndex[email] ? userIndex[email] : {}),
      ...getProfile(profile),
    }
  })
}
