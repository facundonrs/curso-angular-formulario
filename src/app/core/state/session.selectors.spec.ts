import * as fromSession from './session.reducer';
import { selectSessionState } from './session.selectors';

describe('Session Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSessionState({
      [fromSession.sessionFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
