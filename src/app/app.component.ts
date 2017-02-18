import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';
import { Subscription} from './model/subscription';
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

  public clients: number = 0;
  public employees: number = 0;
  public users: number = 0;
  public subscription: Subscription = {email: ''};
  public subscriptionSuccess;
  private feedUrl: string = 'http://www.lianatech.com/news/all-news.rss';
  private feeds: any;
  
  constructor(private feedService: FeedService, private http: Http) {  }

  ngOnInit() {
    this.refreshFeed();
    this.counter();
  }

  // Subscribe to RSS feed
  refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            items => {
              this.feeds = items; // Get items 
              this.feeds = this.feeds.items.slice(0,3); // Slice the array to get first 3 results
            },
            error => console.log(error));
  }

  // Get email address from the form on the page
  onSubmit() { 
    this.subscribe(this.subscription.email)
      .subscribe(data => {
         this.subscriptionSuccess = data.message;
    })
  }

  // Send http.post to Heroku node.js app that redirects the request to mailgun
  subscribe(email): Observable<any> {
    let body = JSON.stringify({email: email});
    let headers = new Headers({'Content-Type': 'application/json'});
    let emailUrl = 'https://warm-sands-84114.herokuapp.com/api/post';
    return this.http.post(emailUrl, body, {headers: headers})
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  // Very simple counter for numbers
  counter() {
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

}
