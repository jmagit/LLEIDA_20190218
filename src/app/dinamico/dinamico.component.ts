import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemoComponent } from '../demo/demo.component';
import { LoggerService } from 'src/indra-core';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [ HomeComponent, DemoComponent, ]
})
export class DinamicoComponent implements OnInit {
  menu = [
    {texto: 'Inicio', componente: HomeComponent },
    {texto: 'Demo', componente: DemoComponent },
  ];
  seleccionado = this.menu[0].componente;

  constructor(private out: LoggerService) { }

  ngOnInit() {
  }

  seleccionar(indice: number) {
    if (0 <= indice && indice < this.menu.length) {
      this.seleccionado = this.menu[indice].componente;
    } else {
      this.out.error('Index out range.');
    }
  }
}
