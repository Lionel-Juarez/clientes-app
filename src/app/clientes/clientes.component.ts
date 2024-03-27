import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
   providers: [DatePipe], 
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent {
  
  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
       clientes => this.clientes = clientes
    );
  }
}
