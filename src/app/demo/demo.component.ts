import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../app-common/notification.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  nombre = 'mundo';
  listado = [
    {id: 1, nombre: 'Madrid'},
    {id: 2, nombre: 'BARCELONA'},
    {id: 3, nombre: 'bilbao'},
    {id: 4, nombre: 'LLeida'},
  ];
  idProvincia = 2;

  resultado: string = null;
  visible = true;
  estetica = { importante: true, urgente: true, error: false };
  size = 12;

  constructor(public notify: NotificationService) { }

  ngOnInit() {
  }

  saluda() {
    this.resultado = `Hola ${this.nombre}`;
  }
  despide() {
    this.resultado = `Adios ${this.nombre}`;
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`;
  }

  cambia() {
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  calcula(a: number, b: number): number {
    return a + b;
  }
  public add(provincia: string): void {
    if (!provincia) {
      this.notify.add('Falta el nobre de la provincia');
      return;
    }
    const newId = this.listado.length ? this.listado[this.listado.length - 1].id + 1 : 1;
    this.listado.push({id: newId, nombre: provincia});
    this.idProvincia = newId;
  }

}
