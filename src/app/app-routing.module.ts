import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PostsComponent} from './posts/posts.component';
import {UsersComponent} from './users/users.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserDetailComponent} from './users/user-detail/user-detail.component';
import {UsersListComponent} from './users/users-list/users-list.component';
import {AddUserComponent} from './users/add-user/add-user.component';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import {AddPostComponent} from './posts/add-post/add-post.component';
import {PostDetailsPageComponent} from './posts/post-details-page/post-details-page.component';

const routes : Routes = [
    {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'posts',
        component: PostsComponent
    }, {
        path: 'posts/:postId',
        component: PostDetailsPageComponent
    }, {
        path: 'addUser',
        component: AddUserComponent
    }, {
        path: 'addPost',
        component: AddPostComponent
    }, {
        path: 'editUser/:id',
        component: EditUserComponent
    }, {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: UsersListComponent
            }, {
                path: ':id',
                component: UserDetailComponent
            }
        ]
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
