import { CredentialsClass } from '../Credentials';

describe('CredentialsClass', () => {
  it('has a constructor with email and hash', () => {
    let creds = new CredentialsClass('test@test.com', 'testhash');
    expect(creds.email).toEqual('test@test.com');
    expect(creds.hash).toEqual('testhash');
  });

  it('has a static method for creating from raw password', () => {
    let creds = CredentialsClass.create('test@test.com', 'testpass');
    expect(creds.email).toEqual('test@test.com');
    expect(creds.hash).toBeTruthy();
  });

  it('accepts the same email and password', () => {
    let creds = CredentialsClass.create('test@test.com', 'testpass');
    expect(creds.compare({ email: 'test@test.com', password: 'testpass' })).toBe(true);
  });

  it('accepts the same email and hash', () => {
    let creds = CredentialsClass.create('test@test.com', 'testpass');
    expect(creds.compare({ email: 'test@test.com', hash: creds.hash })).toBe(true);
  });

  it('rejects a different password', () => {
    let creds = CredentialsClass.create('test@test.com', 'testpass');
    expect(creds.compare({ email: 'test@test.com', password: 'testpass2' })).toBe(false);
  });

  it('rejects a different hash', () => {
    let creds = CredentialsClass.create('test@test.com', 'testpass');
    expect(creds.compare({ email: 'test@test.com', hash: 'testpass' })).toBe(false);
  });

  it('rejects a different email', () => {
    let creds = CredentialsClass.create('test@test.com', 'testpass');
    expect(creds.compare({ email: 'test2@test.com', password: 'testpass' })).toBe(false);
  });

  it('does not matter if we move the data', () => {
    let creds = CredentialsClass.create('test@test.com', 'testpass');
    let creds2 = new CredentialsClass(creds.email, creds.hash);
    expect(creds2.compare({ email: 'test@test.com', password: 'testpass' })).toBe(true);
    expect(creds2.compare({ email: 'test@test.com', password: 'testpass2' })).toBe(false);
    expect(creds2.compare({ email: 'test2@test.com', password: 'testpass' })).toBe(false);
  });
});
