import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { SideColumComponent } from './side-colum/side-colum.component';
import { TopicsComponent } from './topics/topics.component';
import { CentralColumComponent } from './central-colum/central-colum.component';
import { ActualPostComponent } from './actual-post/actual-post.component';
import { RelatedPostsComponent } from './related-posts/related-posts.component';
import { PostMiniatureComponent } from './post-miniature/post-miniature.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    UsersComponent,
    SideColumComponent,
    TopicsComponent,
    CentralColumComponent,
    ActualPostComponent,
    RelatedPostsComponent,
    PostMiniatureComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
