import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AutenticacionGuard } from './autenticacion.guard';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('AutenticacionGuard', () => {
  let guard: AutenticacionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientModule, RouterTestingModule ]
    });
    guard = TestBed.inject(AutenticacionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
