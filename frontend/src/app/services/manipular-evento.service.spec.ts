import { TestBed } from '@angular/core/testing';

import { ManipularEventoService } from './manipular-evento.service';

describe('ManipularEventoService', () => {
  let service: ManipularEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManipularEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
