import * as fromSession from './session.actions';

describe('cargarSessions', () => {
  it('should return an action', () => {
    expect(fromSession.cargarSessions().type).toBe('[Session] Cargar Sessions');
  });
});
