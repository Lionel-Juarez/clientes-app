import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styles : []
})
export class FormComponent {

  titulo: string = "Formulario";
  clienteForm: FormGroup;
  cliente: Cliente = new Cliente();

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private clienteService: ClienteService, private formBuilder: FormBuilder) {
    this.clienteForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  cargarCLiente(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
      }
    })
  }

  public create(): void {
    this.clienteService.create(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])  
    )
  }
}
