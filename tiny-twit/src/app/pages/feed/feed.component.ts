import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-feed',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',  
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
      ])
    ])
  ],
  
  
})


export class FeedComponent implements OnInit {
  usernameControl = new FormControl('');
  usercontentControl = new FormControl('');

  newUsername = '';
  newContent = '';
  tweets: any[] = [];


  ngOnInit(): void {
    const saved = localStorage.getItem('tweets');
    this.tweets = saved ? JSON.parse(saved) : [];
  }

  likeTweet(tweet: any) {
    if (!tweet.liked) {
      tweet.likes++;
      tweet.liked = true;
      this.saveTweets();
    }
    
  }

  deleteTweet(index: number) {
    this.tweets.splice(index, 1);
    this.saveTweets();
  }


  saveTweets() {
    localStorage.setItem('tweets', JSON.stringify(this.tweets));
  }
  
}
