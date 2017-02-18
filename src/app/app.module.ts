import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FeedService } from './feed.service';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';

@NgModule({
  declarations: [
    AppComponent,

    StripHtmlTagsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
