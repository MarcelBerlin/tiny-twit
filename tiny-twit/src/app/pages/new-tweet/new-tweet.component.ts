import { CommonModule } from '@angular/common'; // Basis für jede Angular-Komponente
import { Component } from '@angular/core'; // Für das Formular (Reactive Forms)
import { FormControl, ReactiveFormsModule } from '@angular/forms'; // Für ngIf, ngFor, etc.
import { Router } from '@angular/router'; // Ermöglicht Navigation zu anderen Routen
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-new-tweet', // HTML-Tag, unter dem die Komponente verwendet werden kann
  imports: [CommonModule, ReactiveFormsModule], // Wichtige Angular-Features aktivieren
  templateUrl: './new-tweet.component.html', // Styling-Datei
  styleUrl: './new-tweet.component.scss', // HTML-Datei für das Template
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
export class NewTweetComponent {

  usernameControl = new FormControl('');
  usercontentControl = new FormControl('');
 // Zwei FormControl-Objekte zur Verwaltung der Eingabefelder

  constructor(public router: Router) {} // Dependency Injection: Router-Instanz für spätere Navigation

  postTweet() {
    const username = this.usernameControl.value?.trim() || 'Anonym'; // Benutzernamen holen oder auf "Anonym" zurückfallen
    const content = this.usercontentControl.value?.trim(); // Eingabetext holen und trimmen (Leerzeichen entfernen)


    if (!content || content.length > 280) return; // Sicherheits-Check: kein leerer Inhalt, max. 280 Zeichen

    console.log('Tweet valid');
    

    const tweet = { // Neues Tweet-Objekt erstellen
      username,
      content,
      date: new Date(), // aktuelles Datum/Uhrzeit
      likes: 0, // Startwert
      liked: false // noch nicht geliked
    };

    let tweets = [];

    try {
      const saved = localStorage.getItem('tweets');
      tweets = saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('❌ Fehler beim Parsen von localStorage:', e);
      tweets = []; // Falls kaputt: neu anfangen
    }  
   

    tweets.unshift(tweet); // Neuen Tweet an den Anfang des Arrays setzen
    localStorage.setItem('tweets', JSON.stringify(tweets)); // Gespeicherte Tweets wieder im localStorage aktualisieren


    // Nach dem Posten zurück zur Startseite navigieren
    this.router.navigate(['/']);

  }


}
