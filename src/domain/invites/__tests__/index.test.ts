import { hydrateInvites } from '../index';
import { EventStream } from 'domain/helpers/EventStream';

describe('index', () => {
  let stream = EventStream();
  describe('create', () => {
    it('creates string tokens', () => {
      let invites = hydrateInvites(stream, {});
      let invite = invites.create();
      expect(typeof invite).toEqual('string');
    });

    it('creates unique invites', () => {
      let invites = hydrateInvites(stream, {});
      let invite1 = invites.create();
      let invite2 = invites.create();
      expect(invite1 === invite2).toBe(false);
    });

    it('sends events to the stream', async () => {
      var id;

      function checkStream(): Promise<object> {
        return new Promise((resolve) => {
          let unsub = stream.subscribe((event) => {
            resolve(event);
          });
          let invites = hydrateInvites(stream, {});
          id = invites.create();
          unsub();
        });
      }

      let result = await checkStream();
      expect(result[id]).toBeTruthy();
      expect(result[id].id).toEqual(id);
    });
  });

  describe('validate', () => {
    it('accepts valid invites', () => {
      let invites = hydrateInvites(stream, {});
      let invite = invites.create();
      expect(invites.validate(invite)).toBe(true);
    });

    it('rejects invalid invites', () => {
      let invites = hydrateInvites(stream, {});
      expect(invites.validate('badinvite')).toBe(false);
    });
  });
});
