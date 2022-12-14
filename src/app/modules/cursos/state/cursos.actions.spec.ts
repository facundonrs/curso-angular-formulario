import * as fromCursos from './cursos.actions';

describe('cargarCursoss', () => {
  it('should return an action', () => {
    expect(fromCursos.cargarCursos().type).toBe('[Cursos] Cargar Cursoss');
  });
});
