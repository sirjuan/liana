import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeedService } from './feed.service';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';

import { Ng2ParallaxScrollModule } from 'ng2-parallax-scroll';

@NgModule({
  declarations: [
    AppComponent,
    FeedCardComponent,
    StripHtmlTagsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FeedService, Ng2ParallaxScrollModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
