import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemoComponent } from '../demo/demo.component';
import { LoggerService } from 'src/indra-core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [ HomeComponent, DemoComponent, CalculadoraComponent, ]
})
export class DinamicoComponent implements OnInit {
  menu = [
    {texto: 'Demo', componente: DemoComponent },
    {texto: 'Calculadora', componente: CalculadoraComponent },
    {texto: 'Inicio', componente: HomeComponent },
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
