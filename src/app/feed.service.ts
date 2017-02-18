import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Feed } from './model/feed';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class FeedService {

  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

  constructor( private http: Http ) { }

  // Http get feed from liana server and map it to json format
  getFeedContent(url: string): Observable<Feed> {
    return this.http.get(this.rssToJsonServiceBaseUrl + url)
            .map(this.extractFeeds)
            .catch(this.handleError);
  }

  private extractFeeds(res: Response): Feed {
    let feed = res.json();
    return feed || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}