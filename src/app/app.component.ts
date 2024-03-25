import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Bienvenido a Angular';
  
  users: string[] = ['Lionel', 'Ronaldo', 'Juan', 'Pedro', 'María'];

  visible: boolean = false;

  setVisible(): void {
    this.visible = !this.visible; // Corrección en la lógica de setVisible
    console.log("Hemos hecho click en el botón mostrar", this.visible);
  }

}
