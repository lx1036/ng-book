import { inject, TestBed } from '@angular/core/testing';

import { YoutubeService } from './youtube.service';

describe('YoutubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeService]
    });
  });

  it('should ...', inject([YoutubeService], (service: YoutubeService) => {
    expect(service).toBeTruthy();
  }));
});