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
  template: `
  <div class="card border-primary mb-3" >
  <div class="card-header">Clientes</div>
  <div class="card-body text-primary">
    <h5 class="card-title">Listado de clientes</h5>  
    <table>
      <thead class="table table-bordered table-striped">
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>apellido</th>
          <th>email</th>
          <th>fecha</th>
          </tr>
      </thead>
    <tbody>
      <tr *ngFor="let cliente of clientes">
        <td>{{ cliente.id }}</td>
        <td>{{ cliente.nombre }}</td>
        <td>{{ cliente.apellido }}</td>
        <td>{{ cliente.email }}</td>
        <td>{{ formatDate(cliente.createAt) }}</td>
      </tr>
    </tbody>
    </table>
  </div>
</div>`,
  styles: ``
})
export class ClientesComponent {
  
  clientes: Cliente[];

  ngOnInit(){
    this.clientes = this.clienteService.getClientes();
  }
  
  constructor(private datePipe: DatePipe, private clienteService: ClienteService) {}

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'MM-dd-yyyy') || '';
  }
}
