import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';

// Add the RxJS Observable operators we need in this app.
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/take';
import { Headers, Http  } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

    public clients: number = 0;
    public employees: number = 0;
    public users: number = 0;

    private feedUrl: string = 'http://www.lianatech.com/news/all-news.rss';
    private feeds: any;
        private feed: any;

  constructor(private feedService: FeedService, private http: Http) {
    for (let i = 0; i < 10001; i = i + 100) {
      setTimeout(() => {
        this.users = i;
      }, i * 1);
    } 
    for (let i = 0; i < 181; i++) {
      setTimeout(() => {
        this.employees = i;
      }, i * 55);
    } 
    for (let i = 0; i < 301; i++) {
      setTimeout(() => {
        this.clients = i;
      }, i * 35);
    } 

  }


  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            items => {
              this.feeds = items;
              this.feeds = this.feeds.items.slice(0,3);
              console.log(this.feeds);
            
          },
            error => console.log(error));
  }

  subscribeNewsLetter(email) {
    this.subscribe(email)
      .subscribe(data => {
        console.log(data);
    })
  }

    subscribe(email) {
    return this.http.get(email)
               .map(res => res.json())
               .catch(this.handleError);
  }

    handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
