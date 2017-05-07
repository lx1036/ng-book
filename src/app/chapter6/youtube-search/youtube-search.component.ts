import {Component, OnInit} from '@angular/core';
import {SearchResult} from './search-result.model';
import {YoutubeService} from './youtube.service';

export const YOUTUBE_API_KEY = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
export const youtubeServiceInjectables: Array<any> = [
  {provide: YoutubeService, useClass: YoutubeService},
  {provide: 'YOUTUBE_API_KEY', useValue: YOUTUBE_API_KEY},
  {provide: 'YOUTUBE_API_URL', useValue: YOUTUBE_API_URL}
];


@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css'],
  providers: []
})
export class YoutubeSearchComponent implements OnInit {
  results: SearchResult[];
  loading = false;

  constructor() {
  }

  ngOnInit() {
  }


  updateResults(results: SearchResult[]): void {
    this.results = results;
    // console.log("results:", this.results); // uncomment to take a look
  }

}
