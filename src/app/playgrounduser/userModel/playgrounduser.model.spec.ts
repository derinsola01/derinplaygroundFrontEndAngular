import { PlayGroundUser } from './PlaygroundUser.model';

describe('PlayGroundUser', () => {
  it('should create an instance', () => {
    expect(new PlayGroundUser('user101', 'Derinsola', 'Gbadebo', 'developer@appservice.com')).toBeTruthy();
  });
});
