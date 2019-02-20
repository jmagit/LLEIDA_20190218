import { Component, OnInit, Injectable } from '@angular/core';
import { NotificationService } from '../app-common/notification.service';

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  _nombre = 'mundo';
  get nombre() {
    if (localStorage && localStorage['memo.nombre']) {
      this._nombre = localStorage['memo.nombre'];
    }
    return this._nombre;
  }
  set nombre(value: string) {
    this._nombre = value;
    if (localStorage) {
      localStorage['memo.nombre'] = this._nombre;
    }
  }
}
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
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
  fontSize = 12;

  constructor(public notify: NotificationService, public memo: MemoService) { }

  ngOnInit() {
  }

  saluda() {
    this.resultado = `Hola ${this.memo.nombre}`;
  }
  despide() {
    this.resultado = `Adios ${this.memo.nombre}`;
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

  // tslint:disable:member-ordering
  idiomas = [
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portuges' },
    { codigo: 'en-US', region: 'USA' }
  ];
  idioma = this.idiomas[0].codigo;
  resultados: any[] = [];
  valCalculadora = 123;
  // tslint:enable:member-ordering
  ponResultado(origen: string, valor: any) {
    this.resultados.push({
      pos: this.resultados.length + 1,
      origen,
      valor
    });
  }

}
