import { PlaygroundUser } from './PlaygroundUser.model';

describe('PlaygroundUser', () => {
  it('should create an instance', () => {
    expect(new PlaygroundUser('user101', 'Derinsola', 'Gbadebo', 'developer@appservice.com')).toBeTruthy();
  });
});
