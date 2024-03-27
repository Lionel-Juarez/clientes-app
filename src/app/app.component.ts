import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './clientes/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    UserComponent, 
    ClientesComponent,
    FooterComponent,
    FormComponent,
    HeaderComponent,
    FormsModule],
  templateUrl: './app.component.html',
  styles: ["./app.component.css"]
})
export class AppComponent {
  title: string = 'Bienvenido a Angular';
  
  users: string[] = ['Lionel', 'Ronaldo', 'Juan', 'Pedro', 'María'];

  visible: boolean = false;

  name!: string;

  setVisible(): void {
    this.visible = !this.visible; // Corrección en la lógica de setVisible
    console.log("Hemos hecho click en el botón mostrar", this.visible);
  }

}
