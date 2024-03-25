import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for(game of games; track game.id){
        <li (click)="fav(game.title)">
          {{game.title}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {

  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav(title: string): void {
    this.addFavoriteEvent.emit(title);
  }
  games = [{
    id: 1,
    title: 'dasdsad 1'
  }, {
    id: 2,
    title: 'Game 2'
  
  },{
    id: 3,
    title: 'Game 3'
  }]
}
