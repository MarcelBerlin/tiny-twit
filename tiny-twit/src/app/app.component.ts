import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {

  title = 'tiny-twit';

  isDarkMode = false;


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }




}
