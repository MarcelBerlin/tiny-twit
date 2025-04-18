import { Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { NewTweetComponent } from './pages/new-tweet/new-tweet.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [

    { path: '', component: FeedComponent },
    { path: 'new', component: NewTweetComponent },
    { path: 'profile', component: ProfileComponent }

];
