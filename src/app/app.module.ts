import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommentsComponent} from './comments/comments.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { CommentElemComponent } from './comments/comment-elem/comment-elem.component';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import { UserAllPostsListComponent } from './users/user-all-posts-list/user-all-posts-list.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { LoadingIconComponent } from './loading-page/loading-icon/loading-icon.component';
import { HomeArticleComponent } from './home/home-article/home-article.component';
import { HomeSidebarComponent } from './home/home-sidebar/home-sidebar.component';
import { UserDataComponent } from './users/user-data/user-data.component';
import { PostDetailsPageComponent } from './posts/post-details-page/post-details-page.component';
import { ReadMoreComponent } from './posts/post-details-page/read-more/read-more.component';
import { AddPostPageComponent } from './posts/add-post-page/add-post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    PostsComponent,
    UsersComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    UserDetailComponent,
    UsersListComponent,
    AddUserComponent,
    EditUserComponent,
    AddPostComponent,
    PostsListComponent,
    CommentElemComponent,
    AddCommentComponent,
    UserAllPostsListComponent,
    LoadingPageComponent,
    LoadingIconComponent,
    HomeArticleComponent,
    HomeSidebarComponent,
    UserDataComponent,
    PostDetailsPageComponent,
    ReadMoreComponent,
    AddPostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
