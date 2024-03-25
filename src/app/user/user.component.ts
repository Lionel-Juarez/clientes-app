import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  template: `<section>
  @if (isLoggedIn) {
      <p>Bienvenido, {{username}}</p>
      <img
      (click)="greet()" 
      src="https://github.com/lionel-juarez.png"
      alt="photo">
  }@else {
      <p>Inicia sesion</p>
      <button (click)="isLoggedIn = true">Log in</button>
  }
  <app-games (addFavoriteEvent)="getFavourite($event)">
  </app-games>

  @if(favGame != ""){
    <p>Tu juego favorito es {{favGame}}</p>
  }
</section>`,
  styles: `section{
    max-width: 500px;
    margin:0 auto;
    padding: 20px;
}`
})
export class UserComponent {

  favGame = '';
  username:string = "lioneljuarez";
  isLoggedIn: boolean = false;

  greet(): void {
    console.log("Hello " + this.username + "!");
  }

  getFavourite(title : string){
    this.favGame = title;
  }
}
