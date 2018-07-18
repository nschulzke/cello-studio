import { invites } from './invites';

export const hydrateInvites = (stream, state) => {
  return {
    create() {
      let result = invites.create();
      state[result.id] = result;
      stream.publish(state);
      return result.id;
    },

    validate: (id) => state[id] !== undefined
      && invites.validate(state[id]),
  }
}
