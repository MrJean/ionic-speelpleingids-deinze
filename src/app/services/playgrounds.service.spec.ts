import { TestBed } from '@angular/core/testing';

import { PlaygroundsService } from './playgrounds.service';

describe('PlaygroundsService', () => {
  let service: PlaygroundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaygroundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to fetch playgrounds', () => {
    expect(service.getPlaygrounds().length).toEqual(2);
  });

  it('should be able to fetch a playground for a given index', () => {
    const playground = service.getPlayground(1);
    expect(playground.name).toEqual('Skatepark Briel');
  });
});
